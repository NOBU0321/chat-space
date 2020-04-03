$(function(){ 
    function buildHTML(message){
    if ( message.image ) {
      var html =
      `<div class="message-box">
        <div class="message-box__upper-info">
          <p class="message-box__upper-info__user-name">
            ${message.user_name}
          </p>
          <p class="message-box__upper-info__date">
            ${message.created_at}
          </p>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
        <img src=${message.image} >
      </div>`
      return html;
    } 
    else {
      var html =
      `<div class="message-box">
        <div class="message-box__upper-info">
          <p class="message-box__upper-info__user-name">
            ${message.user_name}
          </p>
          <p class="message-box__upper-info__date">
            ${message.created_at}
          </p>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
$('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
  $('.form__submit').removeAttr('data-disable-with')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('form')[0].reset();
    })
    .fail(function() {
        alert("メッセージ送信に失敗しました");
      });
    
    $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
  })
});