type Email struct {
    Date        time.Time
    From        *mail.Address
    To          []*mail.Address
    ReplyTo     *mail.Address
    Cc          []*mail.Address
    Bcc         []*mail.Address
    Subject     string
    SenderIP    string
    SpamScore   float64
    TextBody    string
    Files       []File
    IsAutoReply bool
    IsMalware   bool
}
