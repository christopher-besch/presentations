#[tokio::test]
async fn get_config_no_cfg_test() {
    let start_request: StartRequest = from_str(r#"
    [...]
        "ContainerArgs": [],
        "ContainerImageID": "sha256:c31f6[...]",
        "ContainerImageName": "debian",
        "ContainerCreated": "2023-10-02T06:16:25.299394139Z",
        [...]
    "#).unwrap();
    let expected_cfg = Err(
        "The logdna logging driver needs a config.".to_string());
    assert_eq!(get_config(&start_request).await, expected_cfg);
}
