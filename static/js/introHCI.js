'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is the new flash");
                $("#testjs").text("Really it is.");
                $(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
        $("#submitBtn").click(updateProject);
}

function projectClick(e) {
   // prevent the page from reloading
   e.preventDefault();
   
   // In an event listner, $(this) is the element that fired the event
   var projectTile = $(this).find("p").text();
   var jumbotronHeader = $(".jumbotron h1");
   console.log("Num of matching items " + jumbotronHeader.length);
   jumbotronHeader.text(projectTile);
   var containingProject = $(this).closest(".project");
   var description = $(containingProject).find(".project-description");
   if(description.length == 0){
     $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
   }
   else {
    $(".project-description").fadeToggle();
   }
}


function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}
