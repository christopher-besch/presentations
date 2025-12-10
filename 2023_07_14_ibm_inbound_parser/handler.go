// only on presentation
var cfg *glb.Config
var noticedOutOfOffice *glb.NoticedOutOfOffice
var ehp *glb.EmailHandlingParam
// only on presentation

if ehp.Email.IsMalware {
    lg.Logf("this is malware")
    lg.Logf("ignore")
    return nil
}

if ehp.Email.SpamScore >= cfg.MaxSpamScore {
    lg.Logf("spam score is too high")
    lg.Logf("ignore")
    return nil
}

if config.GetServiceDeskFromMail(cfg, ehp.Email.From.Address) != nil {
    lg.Logf("email is from email assigned to serviceDesk")
    lg.Logf("aborting to prevent endless loop")
    return nil
}

if ehp.Email.IsAutoReply {
    lg.Logf("email is an auto reply")
    _, found := (*noticedOutOfOffice)[ehp.Email.From.Address]
    if found {
        lg.Logf("%s has already been handled\n",
            email.FormatAddr(ehp.Email.From))
        lg.Logf("ignore")
        return nil
    }
    if ehp.Request == nil {
        lg.Logf("auto-replies don't get used to create new requests")
        lg.Logf("ignore")
        return nil
    }
    lg.Logf("%s has not already been handled\n",
        email.FormatAddr(ehp.Email.From))
    (*noticedOutOfOffice)[ehp.Email.From.Address] = struct{}{}
}

if ehp.JiraInstall == nil {
    lg.Logf("addressee isn't assigned to any serviceDesk")
    lg.Logf("ignore")
    return nil
}

lg.Logf("addressee, a Cc or Bcc refers to serviceDesk email")
if ehp.Request == nil {
    lg.Logf("subject doesn't contain valid issue key")
    createdRequest, err := createRequestFromEmail(
        ehp.ServiceDesk,
        ehp.SenderJiraUsername,
        true,
        ehp.Email,
        ehp.DontReplyTo
    )
    if err != nil {
        return err
    }
    // [...]
} else {
    lg.Logf("subject contains valid issue key in serviceDesk's jira install")
    if ehp.DontComment {
        lg.Logf("the status '%s' is not to be commented", ehp.Request.Status)
        lg.Logf("ignore")
        return nil
    }
    if ehp.SenderJiraUsername != "" {
        lg.Logf("sender is known by jira")
        err := createCommentFromEmail(
            ehp.RequestServiceDesk,
            ehp.Request,
            ehp.SenderJiraUsername,
            ehp.Email,
            ehp.DontReplyT
        )
        if err != nil {
            return err
        }
    }
    // [...]
}

return nil
