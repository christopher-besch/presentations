type EmailHandlingParam struct {
    Email              *Email
    DontReplyTo        bool
    JiraInstall        *JiraInstall
    SenderJiraUsername string
    ServiceDesk        *ServiceDesk
    Request            *Request
    DontComment        bool
    RequestServiceDesk *ServiceDesk
}
