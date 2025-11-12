// /services/notify/notify.go
// --snip--
func NewIssue(/* --snip-- */) {
	for _, notifier := range notifiers {
		notifier.NewIssue(/* --snip-- */)
	}
}
