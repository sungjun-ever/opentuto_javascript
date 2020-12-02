var Body = {
    SetBackColor: function(color){
        document.querySelector('body').style.backgroundColor = color;
    },
    
    SetColor: function(color){
        document.querySelector('body').style.color = color;
    }
}

var Links = {
    SetColor: function(color){
        var list = document.querySelectorAll('a')
        var i = 0
        while(i < list.length){
            list[i].style.color = color
            i += 1
        }
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
        
