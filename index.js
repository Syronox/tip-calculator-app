var tip=-1;

$(".submit").click(submit);

$(document).keydown(function(event){
  if(event.key.toLowerCase()==="enter"){
    submit();
  }
});

$(".tip-grid-item").click(function(){

  $(".tip-grid-item").removeClass("tip-grid-item-pressed");
  $(".custom").removeClass("custom-pressed");
  $(".custom").text("Custom");
  $(".submit").addClass("readyToSubmit");

  if($(this).hasClass("custom")===true){
    tip=parseInt(prompt("Enter tip precentage: ", "0"), 10);
    $(this).text("%"+tip);
    $(this).addClass("custom-pressed");
  }else{
    $(this).addClass("tip-grid-item-pressed");
    tip=parseInt($(this).text());
  }
});

function calcTotalPerPerson(numOfPeople, tip, bill){
  bill=parseFloat(bill);
  return ((bill+bill*(tip/100))/numOfPeople).toFixed(1);
}

function calcTipAmountPerPerson(numOfPeople, tip, bill){
  bill=parseFloat(bill);
  return ((bill*(tip/100))/numOfPeople).toFixed(1);
}

function submit(){
  if($(".submit").hasClass("readyToSubmit")===true){
    if($("#quantity").val()!=0 && $("#totalBill").val()!=0){
      $(".tipAmount-h1").text("$"+calcTipAmountPerPerson($("#quantity").val(),tip,$("#totalBill").val()));
      $(".total-h1").text("$"+calcTotalPerPerson($("#quantity").val(),tip,$("#totalBill").val()));
    }
    else{
      alert("Please enter all parameters.")
    }
  }
}
