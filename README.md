# 3D-VID

# Table of Contents

1. [Introduction](##Introduction)
2. [Installation](##Installation)
3. [Usage](##Usage)


#Introduction
<ul>
 
 <li>
This is a  [NPM](https://www.npmjs.com/package/3d-vid). package for 3D video animation 
 
 </li>
</ul>

##Installation

```bash
npm i 3d-vid
```

##Usage
 <ul>
   <li> first of all you have to add video-media class to the video which you want to rotate it in x-y-z dirictions , and give anoght id to your video called myVideo and for makeing prespective for the z depth wrape this code with video-holder class name div tag with id showreel</li>
   </ul>
   
```html
<div class="video-holder" id="showreel">
<div class="video-media">
   <video  id="myVideo" >
     <source src="VideoPath.mp4">
  </video>
</div>
```

<ul>
   <li> you can also add some text above the video to make it in z depth by adding video-title to your video-media scope </li>
  </ul>
  
```html
<div class="video-media">
   <video  id="myVideo" >
     <source src="VideoPath.mp4">
  </video>
 <h1 class="video-title">OUR REEL</h1>
</div>
```


<ul>
   <li> make a new mouse cursor by adding video-button class name   </li>
  </ul>
  
```html
<div class="video-button" id="button">press</div>
```

## Click to full screen video
<ul>
   <li> Firing function called openFullscreen() the video will be on screen full size with this a tag    </li>
  </ul>
  
```html
  <a onclick="openFullscreen()"> 
   <div class="video-holder" id="showreel">
  .....
   </div>
  <a/>
```
