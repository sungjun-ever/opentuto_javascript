
var Body = {
    SetBackColor: function(color){
        $('body').css('backgroundColor', color)
    },
    
    SetColor: function(color){
        $('body').css('color', color)
    }
}

var Links = {
    SetColor: function(color){
        $('a').css('color', color)
    }
}

function change(self){
    if (self.value === 'night'){
        Body.SetBackColor('black')
        Body.SetColor('white')
        Links.SetColor('powderblue')
        self.value = 'day';
        
    } else {
        Body.SetBackColor('white')
        Body.SetColor('black')
        Links.SetColor('blue')
        self.value = 'night';
    }
}
        
