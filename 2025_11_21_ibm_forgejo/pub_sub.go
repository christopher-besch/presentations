import ntfy "forgejo.org/services/notify"

type myNtfy struct {
	ntfy.NullNotifier
}
var _ ntfy.Notifier = &myNtfy{}
func (n *myNtfy)
    NewIssue(/* --snip-- */) {
    /* --snip-- */ }

// inject dependency
ntfy.RegisterNotifier(&myNtfy{})
// send message
ntfy.NewIssue(/* --snip-- */)    
