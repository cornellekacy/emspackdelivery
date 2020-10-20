<?php include 'header.php'; ?>
<?php include 'sidebar.php'; ?>
<!-- End Left Sidebar  -->
<!-- Page wrapper  -->
<div class="page-wrapper">
    <!-- Bread crumb -->
    <div class="row page-titles">
        <div class="col-md-5 align-self-center">
            <h3 class="text-primary">Dashboard</h3> </div>
            <div class="col-md-7 align-self-center">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="breadcrumb-item active">Dashboard</li>
                </ol>
            </div>
        </div>
        <!-- End Bread crumb -->
        <!-- Container fluid  -->
        <div class="container-fluid">
            <!-- Start Page Content -->
            <div class="row">
                <div class="col-md-2">
                 
                </div>
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-title">
                            <?php 
include 'conn.php';
if($_GET['id']) {
    $id = $_GET['id'];

    $sql = "SELECT * FROM track WHERE track_id = {$id}";
    $result = $link->query($sql);

    $data = $result->fetch_assoc();

}

?>
                                            <?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
include 'conn.php';

// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
if(isset($_POST['save'])){
     // $id1 = mysqli_real_escape_string($link,$_POST['id1']);
 $l1 = mysqli_real_escape_string($link,$_POST['l1']);
 $d1 = mysqli_real_escape_string($link,$_POST['d1']);
  $dc1 = mysqli_real_escape_string($link,$_POST['dc1']);
 $l2 = mysqli_real_escape_string($link,$_POST['l2']);
 $d2 = mysqli_real_escape_string($link,$_POST['d2']);
   $dc2 = mysqli_real_escape_string($link,$_POST['dc2']);
 $l3 = mysqli_real_escape_string($link,$_POST['l3']);
 $d3 = mysqli_real_escape_string($link,$_POST['d3']);
    $dc3 = mysqli_real_escape_string($link,$_POST['dc3']);
 $l4 = mysqli_real_escape_string($link,$_POST['l4']);
 $d4 = mysqli_real_escape_string($link,$_POST['d4']);
    $dc4 = mysqli_real_escape_string($link,$_POST['dc4']);
 $l5 = mysqli_real_escape_string($link,$_POST['l5']);
 $d5 = mysqli_real_escape_string($link,$_POST['d5']);
    $dc5 = mysqli_real_escape_string($link,$_POST['dc5']);

     $l6 = mysqli_real_escape_string($link,$_POST['l6']);
 $d6 = mysqli_real_escape_string($link,$_POST['d6']);
  $dc6 = mysqli_real_escape_string($link,$_POST['dc6']);
 $l7 = mysqli_real_escape_string($link,$_POST['l7']);
 $d7 = mysqli_real_escape_string($link,$_POST['d7']);
   $dc7 = mysqli_real_escape_string($link,$_POST['dc7']);
 $l8 = mysqli_real_escape_string($link,$_POST['l8']);
 $d8 = mysqli_real_escape_string($link,$_POST['d8']);
    $dc8 = mysqli_real_escape_string($link,$_POST['dc8']);
 $l9 = mysqli_real_escape_string($link,$_POST['l9']);
 $d9 = mysqli_real_escape_string($link,$_POST['d9']);
    $dc9 = mysqli_real_escape_string($link,$_POST['dc9']);
 $l10 = mysqli_real_escape_string($link,$_POST['l10']);
 $d10 = mysqli_real_escape_string($link,$_POST['d10']);
    $dc10 = mysqli_real_escape_string($link,$_POST['dc10']);



// Attempt insert query execution
        $sql =  "UPDATE track SET l1='$l1',d1='$d1',dc1='$dc1',l2='$l2',d2='$d2',dc2='$dc2',l3='$l3',d3='$d3',dc3='$dc3', l4='$l4', d4='$d4',dc4='$dc4', l5='$l5', d5='$d5',dc5='$dc5',l6='$l6', d6='$d6',dc6='$dc6',l7='$l7', d7='$d7',dc7='$dc7',l8='$l8', d8='$d8',dc8='$dc8',l9='$l9', d9='$d9',dc9='$dc9',l10='$l10', d10='$d10',dc10='$dc10'    WHERE track_id={$id} ";
    if(mysqli_query($link, $sql)){
        echo "<div class='alert alert-success'>
        <strong>Success!</strong> Tracking Successfully Update.
        </div>";
    } else{
        echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
    }

}
// Close connection
mysqli_close($link);

?>




                        </div>
                        <div class="basic-form">
                            <h3>Edit Package Location On Tracking</h3>
                            <div class="basic-form">
                           
                                <form action="" method="post" action="">
                                      <div class="form-group">
                                  <input type="hidden" name="id1" value="<?php echo $data["track_id"];?>" class="form-control" placeholder="Email">
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                            <div class="form-group">
                                    <label><b>First Location</b></label>
                                    <input type="text" name="l1" value="<?php echo $data["l1"];?>" class="form-control" placeholder="" required="">
                                </div>
                                    </div>
                                     <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Date</b></label>
                                    <input type="date" value="<?php echo $data["d1"];?>" name="d1" class="form-control" placeholder="" >
                                </div>
                                     </div>
                                        <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Description</b></label>
                                   <textarea class="form-control" rows="4" name="dc1" id="comment"><?php echo $data["dc1"];?></textarea>
                                    
                                </div>
                                     </div>
                                </div>
                                   <div class="row">
                                    <div class="col-md-4">
                                            <div class="form-group">
                                    <label><b>Second Location</b></label>
                                    <input type="text" name="l2" value="<?php echo $data["l2"];?>" class="form-control" placeholder="" >
                                </div>
                                    </div>
                                     <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Date</b></label>
                                    <input type="date" name="d2" value="<?php echo $data["d2"];?>" class="form-control" placeholder="">
                                </div>
                                     </div>
                                             <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Description</b></label>
                                   <textarea class="form-control" rows="5" name="dc2" id="comment"><?php echo $data["dc2"];?></textarea>
                                    
                                </div>
                                     </div>
                                </div>
                                   <div class="row">
                                    <div class="col-md-4">
                                            <div class="form-group">
                                    <label><b>Third Location</b></label>
                                    <input type="text" name="l3" value="<?php echo $data["l3"];?>" class="form-control" placeholder="" >
                                </div>
                                    </div>
                                     <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Date</b></label>
                                    <input type="date" name="d3" value="<?php echo $data["d3"];?>" class="form-control" placeholder="" >
                                </div>
                                     </div>
                                             <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Description</b></label>
                                   <textarea class="form-control" rows="5" name="dc3" id="comment"><?php echo $data["dc3"];?></textarea>
                                    
                                </div>
                                     </div>
                                </div>
                                   <div class="row">
                                    <div class="col-md-4">
                                            <div class="form-group">
                                    <label><b>Fourth Location</b></label>
                                    <input type="text" name="l4" value="<?php echo $data["l4"];?>" class="form-control" placeholder="" >
                                </div>
                                    </div>
                                     <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Date</b></label>
                                    <input type="date" name="d4" value="<?php echo $data["d4"];?>" class="form-control" placeholder="" >
                                </div>
                                     </div>
                                             <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Description</b></label>
                                   <textarea class="form-control" rows="5" name="dc4" id="comment"><?php echo $data["dc4"];?></textarea>
                                    
                                </div>
                                     </div>
                                </div>
                                   <div class="row">
                                    <div class="col-md-4">
                                            <div class="form-group">
                                    <label><b>Fith Location</b></label>
                                    <input type="text" name="l5" value="<?php echo $data["l5"];?>" class="form-control" placeholder="" >
                                </div>
                                    </div>
                                     <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Date</b></label>
                                    <input type="date" name="d5" value="<?php echo $data["d5"];?>" class="form-control" placeholder="">
                                </div>
                                     </div>
                                             <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Description</b></label>
                                   <textarea class="form-control" rows="4" name="dc5" id="comment"><?php echo $data["dc5"];?></textarea>
                                    
                                </div>
                                     </div>
                                </div>
                                <hr>
                             <div class="row">
                                    <div class="col-md-4">
                                            <div class="form-group">
                                    <label><b>sixth Location</b></label>
                                    <input type="text" name="l6" value="<?php echo $data["l6"];?>" class="form-control" placeholder="" required="">
                                </div>
                                    </div>
                                     <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Date</b></label>
                                    <input type="date" value="<?php echo $data["d6"];?>" name="d6" class="form-control" placeholder="" >
                                </div>
                                     </div>
                                        <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Description</b></label>
                                   <textarea class="form-control" rows="4" name="dc6" id="comment"><?php echo $data["dc6"];?></textarea>
                                    
                                </div>
                                     </div>
                                </div>
                                   <div class="row">
                                    <div class="col-md-4">
                                            <div class="form-group">
                                    <label><b>Seventh Location</b></label>
                                    <input type="text" name="l7" value="<?php echo $data["l7"];?>" class="form-control" placeholder="" >
                                </div>
                                    </div>
                                     <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Date</b></label>
                                    <input type="date" name="d7" value="<?php echo $data["d7"];?>" class="form-control" placeholder="">
                                </div>
                                     </div>
                                             <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Description</b></label>
                                   <textarea class="form-control" rows="5" name="dc7" id="comment"><?php echo $data["dc7"];?></textarea>
                                    
                                </div>
                                     </div>
                                </div>
                                   <div class="row">
                                    <div class="col-md-4">
                                            <div class="form-group">
                                    <label><b>Eigth Location</b></label>
                                    <input type="text" name="l8" value="<?php echo $data["l8"];?>" class="form-control" placeholder="" >
                                </div>
                                    </div>
                                     <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Date</b></label>
                                    <input type="date" name="d8" value="<?php echo $data["d8"];?>" class="form-control" placeholder="" >
                                </div>
                                     </div>
                                             <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Description</b></label>
                                   <textarea class="form-control" rows="5" name="dc9" id="comment"><?php echo $data["dc9"];?></textarea>
                                    
                                </div>
                                     </div>
                                </div>
                                   <div class="row">
                                    <div class="col-md-4">
                                            <div class="form-group">
                                    <label><b>ninth Location</b></label>
                                    <input type="text" name="l9" value="<?php echo $data["l9"];?>" class="form-control" placeholder="" >
                                </div>
                                    </div>
                                     <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Date</b></label>
                                    <input type="date" name="d9" value="<?php echo $data["d9"];?>" class="form-control" placeholder="" >
                                </div>
                                     </div>
                                             <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Description</b></label>
                                   <textarea class="form-control" rows="9" name="dc9" id="comment"><?php echo $data["dc9"];?></textarea>
                                    
                                </div>
                                     </div>
                                </div>
                                   <div class="row">
                                    <div class="col-md-4">
                                            <div class="form-group">
                                    <label><b>Tenth Location</b></label>
                                    <input type="text" name="l10" value="<?php echo $data["l10"];?>" class="form-control" placeholder="" >
                                </div>
                                    </div>
                                     <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Date</b></label>
                                    <input type="date" name="d10" value="<?php echo $data["d10"];?>" class="form-control" placeholder="">
                                </div>
                                     </div>
                                             <div class="col-md-4">
                                             <div class="form-group">
                                    <label><b>Description</b></label>
                                   <textarea class="form-control" rows="4" name="dc10" id="comment"><?php echo $data["dc10"];?></textarea>
                                    
                                </div>
                                     </div>
                                </div>
                            
                              
                                <button type="submit" name="save" class="btn btn-primary">Add Location</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-md-2">
         
        </div>
    </div>
       <?php include 'footer.php'; ?>