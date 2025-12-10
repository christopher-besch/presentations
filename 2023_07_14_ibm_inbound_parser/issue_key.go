re := regexp.MustCompile(
    `[A-Z]+-\d+`)
matches := re.FindAllString(
    emailSubject, -1)
