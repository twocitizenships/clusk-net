// import { Client } from "twitter-api-sdk";
// const client = new Client(process.env.BEARER_TOKEN)

// export function submitHandle(form) {

//     form.preventDefault();
//     form.handle.value = "";
//     console.log(form.handle.value)
//     var handle = form.handle.value;
//     var localReach;

//     //Call Twitter API to get user's follower count
//     var user = client.users.show({ screen_name: handle })
//     var followers = user.followers_count;
//     console.log(followers)
//     //Loop through user's followers and add their follower count to localReach
//     var followersList = client.users.followers({ screen_name: handle })
//     for (var i = 0; i < followersList.length; i++) {
//         localReach += followersList[i].followers_count;
//         console.log(localReach)
//     }
//     //Display local reach
//     const localReachDiv = document.createElement("div");
//     const localReachValue = document.createTextNode(localReach);
//     localReachDiv.appendChild(localReachValue)
// }