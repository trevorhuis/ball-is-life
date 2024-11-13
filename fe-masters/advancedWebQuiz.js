// Question 1 async/defer

/*
When a browser is parsing html and encounters a script tag, it stops parsing the html
and fetches the script. To not block the html parsing we can use async in the script tag.

<script async src="...">

However this has no guarantee of execution, it will execute when the script finishes fetching.
The defer tag gives us this guarentee of execution.

<script defer src="...">

async takes precedence over defer keyword
*/

// Question 2 pipeline/compositing

/*


*/
