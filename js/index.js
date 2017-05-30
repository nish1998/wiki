
$(document).ready(function(){
  
  $("#search").click(function(){
    
  var searchval=$("#searchbar").val();
    
   var url="https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchval + "&format=json&callback=?";
    
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType:"json",
      
      
      success:function(data){
        for(i=0;i<data[1].length;i++){
          var link=data[3][i];
          $("#output").prepend("<li>"+'<a href="' +data[3][i] +'">'+"<h2>" +data[1][i]+ "</h2>"+"<p>"+data[2][i]+"</p>"+"</a>"+"</li>"+"<br>");
        }
        
      },
      error:function(errorMessege){
        alert('error');
        
      }
      
      
      
    });
  
  });
  });