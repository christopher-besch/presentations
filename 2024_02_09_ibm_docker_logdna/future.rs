// called from http handler
async fn start_logging(/* [...] */) {
    // create new future
    rt.spawn(consume_log(params));
    // fire-and-forget: ready to handle next request
}

async fn consume_log(/* [...] */) {
    // condition for executing future: opened file
    File::open(&path).await;
    // do something with opened file
}
