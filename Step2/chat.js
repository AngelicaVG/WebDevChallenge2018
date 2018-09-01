
  var url = window.location.href;
  var locale = url.split("/")[5];
  var onlineGreeting, offlineGreeting;


  $zopim(function(){
    $zopim.livechat.departments.filter("es", "pl", "pt-pt", "fr", "hi");
  })


  const startZopim = function(){
    window.$zopim || (function (d, s) {
      var z = $zopim = function (c) {
        z._.push(c)
      }, $ = z.s =
        d.createElement(s), e = d.getElementsByTagName(s)[0]; z.set = function (o) {
          z.set.
          _.push(o)
        }; z._ = []; z.set._ = []; $.async = !0; $.setAttribute('charset', 'utf-8');
      $.src = '//v2.zopim.com/?'; z.t = +new Date; $.
        type = 'text/javascript'; e.parentNode.insertBefore($, e)
    })(document, 'script');
  }

  if(locale === "es") {
    startZopim();
    onlineGreeting = "Habla con nosotras";
    offlineGreeting = 'Nuestros consultores no están disponibles en este momento, deje un mensaje y nos pondremos en contacto con usted en breve.';
    $zopim(function() {
      $zopim.livechat.setGreetings({
      'online': onlineGreeting,
      'offline': offlineGreeting
      });
    });
  } 
  else if(locale === "pt-pt") {
    startZopim();
    onlineGreeting = "Fale com a gente";
    offlineGreeting = 'Nossos consultores não estão disponíveis no momento, deixe uma mensagem e entraremos em contato com você em breve.';
    $zopim(function() {
      $zopim.livechat.setGreetings({
      'online': onlineGreeting,
      'offline': offlineGreeting
      });
    });
  } 
  else if(locale === "fr") {
    startZopim();
    onlineGreeting = "Parlez-nous";
    offlineGreeting = 'Nos consultants ne sont pas disponibles pour le moment, laissez un message et nous vous contacterons sous peu.';
    $zopim(function() {
      $zopim.livechat.setGreetings({
      'online': onlineGreeting,
      'offline': offlineGreeting
      });
    });
  } 
   else if(locale === "hi") {
    startZopim();
    onlineGreeting = "हमारे साथ चैट करें";
    offlineGreeting = "हहमारे सलाहकार इस समय उपलब्ध नहीं हैं, एक संदेश छोड़ दें और हम जल्द ही आपसे संपर्क करेंगे।";
    $zopim(function() {
      $zopim.livechat.setGreetings({
      'online': onlineGreeting,
      'offline': offlineGreeting
      });
    });
  }
   else if(locale === "pl") {
    startZopim();
    onlineGreeting = "Rozmawiaj z nami";
    offlineGreeting = "Nasi doradcy nie są w tej chwili dostępni, zostaw wiadomość, a wkrótce się z Tobą skontaktujemy.";
    $zopim(function() {
      $zopim.livechat.setGreetings({
      'online': onlineGreeting,
      'offline': offlineGreeting
      });
    });
  }
  else {
    startZopim();
    onlineGreeting = "Chat with us";
    offlineGreeting = "Our counselors are not available at the moment, please leave a message and we will contact you soon.";
    $zopim(function() {
      $zopim.livechat.setGreetings({
      'online': onlineGreeting,
      'offline': offlineGreeting
      });
    });
  }
