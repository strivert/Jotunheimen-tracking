<?php

	require '../lib/firebaseLib.php';
	include('../config.php');
	$firebase = new Firebase\FirebaseLib($url, $token);

	$point = $firebase->get('/point');		
	$point = json_decode($point, true);

	function g_file_download( $arr ){
		header("Content-Type: text/csv");
		header('Content-Disposition: attachment; filename=point.csv');
		outputCSV($arr);
	}

	function outputCSV($data) {
	  $output = fopen("php://output", "w");
	  foreach ($data as $row){
		fputcsv($output, $row); // here you can change delimiter/enclosure
	  }
	  fclose($output);
	}
	
	$m=1;
	$dataArray = array(
		array(
			"No",
			"Device Id",
			"Date Time",
			"Lat",
			"Long",
			"Status",
			"Content",
			"TrackNumber"
		)
	);

	if (sizeof($point) >= 1) {
		foreach($point as $key=>$r){
			foreach($r as $k=>$v){
			
				$dtArr = explode("-", $v['dateTime']);
								
				$cnt = "";
				for($t=0; $t<=6; $t++){
					if( isset($v["item_".$t]) )
						$cnt .= $v["item_".$t].", ";
				}
				$cnt = substr($cnt, 0, -2);


				$dataArray[$m] = array(
					$m,
					$key,
					date('d.m.Y H:i', $dtArr[0]),
					$v['lat'],
					$v['long'],
					$v['mode'],
					$cnt,
					$v['stage']
				);
				$m++;
			}
		
		}
	}

	g_file_download($dataArray);
?>