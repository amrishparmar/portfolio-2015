<ol class="breadcrumb">
  <li><a href="index.php">Home</a></li>
  <li><a href="university.php">University Projects</a></li>
  <li class="active">Virtualoso</li>
</ol>
<div id="main">
  <noscript><strong>Your browser does not support JavaScript. Please enable for full functionality.</strong></noscript>
  <h1>Virtualoso</h1>
  <hr>
  <p>In the second term of the first year we took a course called "Audio-Visual Computing" which introduced us to a variety of topics in the field such as bitmap and vector graphics, filters, computer vision and audio synthesis amongst others.</p>
  <p>As part of our final project for the module we were required to work in pairs to create a audio-visual system which incorporated some of the techniques that we had explored during the course. My and my partner <a href="#">Charlie Ringer</a> decided to create an interactive instrument application.</p>
  <p>The system uses colour tracking to track different objects which then control different aspects of the program's functionality. It allows the user to use nearly any household object to interface with the program.</p>
  <p>It has two main parts, a drum kit and a theremin:</p>
  <ul class="description"> 
    <li>In the case of the drum kit, the user sets up two objects, which that act as left and right drum sticks. When the tracked objects "hit" an on-screen drum kit, the program plays the sampled sound corresponding to that drum.</li> 
    <li>In the theremin, one object controls the amplitude (volume) and the other controls the frequency (pitch). When the user moves the amplitude tracker left and right, the volume of the synthesised audio is reduced and increased accordingly. When the user moves the frequency tracker up and down, the pitch of the audio is raised and lowerered.</li>
  </ul>
  <hr>
  <div class="container-fluid">
    <div class="row screenshots dm-screenshots">
      <img id="virt-screen-1" class="col-md-4 col-sm-6 optional sm-show" src="images/virt_screen_1.png" alt="virt_screen_1">
      <img id="virt-screen-2" class="col-md-4 optional" src="images/virt_screen_2.png" alt="virt_screen_2">
      <img id="virt-screen-3" class="col-md-4 col-sm-6 col-xs-12" src="images/virt_screen_3.png" alt="virt_screen_3">
    </div>
    <p>You can download the application by clicking below on the link for your platform.</p> 
    <p><strong>Download Links:</strong></p>
    <div class="download-links">
      <a href="binaries/virtualoso/virtualoso_win32.zip" class="btn btn-primary"><i class="fa fa-windows"></i> Windows</a>
      <a href="binaries/virtualoso/virtualoso_mac.zip" class="btn btn-primary"><i class="fa fa-apple"></i> Mac OS X</a>
      <a href="binaries/virtualoso/virtualoso_linux32.zip" class="btn btn-primary"><i class="fa fa-linux"></i> Linux</a>
    </div>
    <small>This application requires a webcam.</small>
  </div>
</div>
<!-- markup for modals -->
<!-- cw2 modals-->
<div class="modal fade" id="virt-screen-1-modal" role="dialog" aria-labelledby="virt-screen-1-modal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body cw2-modal">
        <img class="full-width" src="images/virt_screen_1.png" alt="virt_screen_1_large">
        <p class="modal-caption">Void Attack main menu</p>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="virt-screen-2-modal" role="dialog" aria-labelledby="virt-screen-2-modal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body cw2-modal">
        <img class="full-width" src="images/virt_screen_2.png" alt="virt_screen_2_large">
        <p class="modal-caption">Gameplay Screen 1</p>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="virt-screen-3-modal" role="dialog" aria-labelledby="virt-screen-3-modal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body cw2-modal">
        <img class="full-width" src="images/virt_screen_3.png" alt="virt_screen_3_large">
        <p class="modal-caption">Gameplay Screen 2</p>
      </div>
    </div>
  </div>
</div>