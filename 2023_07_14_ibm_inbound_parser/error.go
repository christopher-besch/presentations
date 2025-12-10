func myFunction(data DataType) (ReturnType, error) {
    response, err := doSomething(someData)
    if err != nil {
        return nil, err
    }
    return something, nil
}
