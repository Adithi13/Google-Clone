const searchInput = document.querySelector("search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter"){
           search();
    }
});

function search() {
    const input = searchInput.nodeValue;// we want to store the value inside input box//
    // means- inside the i/p constant we're going to store the value that's inside the i/p tag//
      window.location.href="https://www.google.com/search?q=${input}+&sxsrf=AJOqlzWRd4X-AucIjEZanF24swbpAVCYIw%3A1673752478191&ei=nm_DY6W0C9KxmgebvonQBw&ved=0ahUKEwil-53vzcj8AhXSmOYKHRtfAnoQ4dUDCBA&uact=5&oq=${input}+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIHCAAQsQMQQzIHCC4Q1AIQQzIHCC4QsQMQQzIICC4QgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIFCC4QgAQyBQgAEIAEMggIABCABBCxAzoHCCMQsAMQJzoKCAAQRxDWBBCwAzoHCAAQsAMQQzoNCAAQ5AIQ1gQQsAMYAToMCC4QyAMQsAMQQxgCSgQIQRgASgQIRhgBULUTWLUTYKMvaAJwAXgAgAGMAYgBjAGSAQMwLjGYAQCgAQHIARPAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz-serp";
}