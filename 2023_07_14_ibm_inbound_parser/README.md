# inbound_parser Presentation
- 20/30min.
- what's the problem
- how the inbound_parser solves it
- how a small idea can blow up (original vs final scope)
- five step plan to victory:
    - collect sample data
    - create testing environment
    - connect sendgrid
    - add jira connection
    - add ansible config
- auto reply
- how to remove redundant parts of mail
- (user handling)
- malware detection
- jira api vs jira servicedesk api
- email encoding:
    - all 7bit ascii
    - base64 (different encodings)
    - quoted printable
- error handling:
    - send email on critical, extra code not to fail
    - already logged everything
    - fail silently, no message to user

- ansible
- deployment:
    -> found bounces
    -> found auto-replies
    -> some old cron jobs to be killed

- code detail:
    - go
    - data oriented
    - all structs in one module -> look here to understand project
    - all functionality in other modules, no classes

- final code example: email handling params -> handler

## takeaways
- good testing environment important!!!
- as little reading text as possible (only subject key and reply above this line)
- security (e.g. token timing attack, don't trust any input)
- close feedback (Maik weekly)
- no elegant solution to all problems, never finished

## Why did it take so long?
- didn't know what we want
- didn't understand jira api
- 
