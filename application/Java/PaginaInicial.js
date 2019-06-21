// Mudar a aparencia do menu superior quando desce a pagina

function myFunction() {

    var navbar = document.getElementById("myNavbar");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
    {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-black";
    }
     else
    {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-black", "");
    }
}
// Mostrar o menu em pequenas telas
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1)
    {
        x.className += " w3-show";
    } else
    {
        x.className = x.className.replace(" w3-show", "");
    }
}

$(document).ready(function(){
    $("#agenda1").hide();
});

$(document).ready(function(){
    $("#PSI").click(function(){
        $("#tbagendamento").toggle();
        $("#agenda1").show();
      });
  });


$(document).ready(function () {
var eventData = [
  {"date":"2019-05-01","badge":false,"title":"Example 1",classname:"Livre"},
  {"date":"2019-05-02","badge":false,"title":"Example 2",classname:"Ocupado"},
  {"date":"2019-05-03","badge":true,"title":"Example 2",classname:"Livre"},
  {"date":"2019-05-13","badge":false,"title":"Example 2",classname:"Livre"}
];

function myDateFunction(id) {
  var date = $("#" + id).data("date");
  var hasEvent = $("#" + id).data("hasEvent");
  $("#tr").append();
}

    $("#my-calendar").zabuto_calendar(
        {
        language: "pt",
        ajax: {
            url: "Carregar.json",
            modal: false
        },
        action: function() {myDateFunction(this.id)},
        legend:
            [
                {type: "text", label: "Text", badge: "00"},
                {type: "block", label: "Disponivel", classname: "Livre"},
                {type: "block", label: "Indisponivel", classname: "Ocupado"},
                {type: "spacer"},
            ],
        cell_border: true,
        today: true,
        show_days: false,
        weekstartson: 0,
        nav_icon: {
          prev: '<i class="fa fa-chevron-circle-left"></i>',
          next: '<i class="fa fa-chevron-circle-right"></i>'
        }
    });
});


$(document).ready(function(){
    $("#volt1").click(function(){
    if($("#tbagendamento").is(":hidden")){
          $("#agenda1").toggle();
          $("#tbagendamento").show();
        }
      });
  });

  

  function showRange(){
    var range = document.formulario.range;
    var p = document.getElementById('numRange');
    p.style.paddingLeft='40px';
    p.innerHTML = range.value;
  }

// construindo o calendário
function popdate(obj,div,tam,ddd)
{
    if (ddd)
    {
        day = ""
        mmonth = ""
        ano = ""
        c = 1
        char = ""
        for (s=0;s<parseInt(ddd.length);s++)
        {
            char = ddd.substr(s,1)
            if (char == "/")
            {
                c++;
                s++;
                char = ddd.substr(s,1);
            }
            if (c==1) day    += char
            if (c==2) mmonth += char
            if (c==3) ano    += char
        }
        ddd = mmonth + "/" + day + "/" + ano
    }

    if(!ddd) {today = new Date()} else {today = new Date(ddd)}
    date_Form = eval (obj)
    if (date_Form.value == "") { date_Form = new Date()} else {date_Form = new Date(date_Form.value)}

    ano = today.getFullYear();
    mmonth = today.getMonth ();
    day = today.toString ().substr (8,2)

    umonth = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
    days_Feb = (!(ano % 4) ? 29 : 28)
    days = new Array (31, days_Feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)

    if ((mmonth < 0) || (mmonth > 11))  alert(mmonth)
    if ((mmonth - 1) == -1) {month_prior = 11; year_prior = ano - 1} else {month_prior = mmonth - 1; year_prior = ano}
    if ((mmonth + 1) == 12) {month_next  = 0;  year_next  = ano + 1} else {month_next  = mmonth + 1; year_next  = ano}
    txt  = "<table bgcolor='#efefff' style='border:solid #330099; border-width:2' cellspacing='0' cellpadding='3' border='0' width='"+tam+"' height='"+tam+"'>"
    txt += "<tr bgcolor='#FFFFFF'><td colspan='7' align='center'><table border='0' cellpadding='0' width='100%' bgcolor='#FFFFFF'><tr>"
    txt += "<td width=20% align=center><a href=javascript:popdate('"+obj+"','"+div+"','"+tam+"','"+((mmonth+1).toString() +"/01/"+(ano-1).toString())+"') class='Cabecalho_Calendario' title='Ano Anterior'><<</a></td>"
    txt += "<td width=20% align=center><a href,=javascript:popdate('"+obj+"','"+div+"','"+tam+"','"+( "01/" + (month_prior+1).toString() + "/" + year_prior.toString())+"') class='Cabecalho_Calendario' title='Mês Anterior'><</a></td>"
    txt += "<td width=20% align=center><a href=javascript:popdate('"+obj+"','"+div+"','"+tam+"','"+( "01/" + (month_next+1).toString()  + "/" + year_next.toString())+"') class='Cabecalho_Calendario' title='Próximo Mês'>></a></td>"
    txt += "<td width=20% align=center><a href=javascript:popdate('"+obj+"','"+div+"','"+tam+"','"+((mmonth+1).toString() +"/01/"+(ano+1).toString())+"') class='Cabecalho_Calendario' title='Próximo Ano'>>></a></td>"
    txt += "<td width=20% align=right><a href=javascript:force_close('"+div+"') class='Cabecalho_Calendario' title='Fechar Calendário'><b>X</b></a></td></tr></table></td></tr>"
    txt += "<tr><td colspan='7' align='left' bgcolor='#4d73a7' class='mes'><a href=javascript:pop_year('"+obj+"','"+div+"','"+tam+"','" + (mmonth+1) + "') class='mes'>" + ano.toString() + "</a>"
    txt += " <a href=javascript:pop_month('"+obj+"','"+div+"','"+tam+"','" + ano + "') class='mes'>" + umonth[mmonth] + "</a> <div id='popd' style='position:absolute'></div></td></tr>"
    txt += "<tr bgcolor='#148bcb'><td width='14%' class='dia' align=center><b>Dom</b></td><td width='14%' class='dia' align=center><b>Seg</b></td><td width='14%' class='dia' align=center><b>Ter</b></td><td width='14%' class='dia' align=center><b>Qua</b></td><td width='14%' class='dia' align=center><b>Qui</b></td><td width='14%' class='dia' align=center><b>Sex<b></td><td width='14%' class='dia' align=center><b>Sab</b></td></tr>"
    today1 = new Date((mmonth+1).toString() +"/01/"+ano.toString());
    diainicio = today1.getDay () + 1;
    week = d = 1
    start = false;

    for (n=1;n<= 42;n++)
    {
        if (week == 1)  txt += "<tr bgcolor='#efefff' align=center>"
        if (week==diainicio) {start = true}
        if (d > days[mmonth]) {start=false}
        if (start)
        {
            dat = new Date((mmonth+1).toString() + "/" + d + "/" + ano.toString())
            day_dat   = dat.toString().substr(0,10)
            day_today  = date_Form.toString().substr(0,10)
            year_dat  = dat.getFullYear ()
            year_today = date_Form.getFullYear ()
            colorcell = ((day_dat == day_today) && (year_dat == year_today) ? " bgcolor='#ffeb3b' class='w3-hover-yellow'  " : "" )
            txt += "<td"+colorcell+" align=center class='w3-hover-blue' style='cursor:pointer' onclick=javascript:block('"+  d + "/" + (mmonth+1).toString() + "/" + ano.toString() +"','"+ obj +"','" + div +"')  ><a href=javascript:block('"+  d + "/" + (mmonth+1).toString() + "/" + ano.toString() +"','"+ obj +"','" + div +"') class='data'>"+ d.toString() + "</a></td>"
            d ++
        }
        else
        {
            txt += "<td class='data' align=center> </td>"
        }
        week ++
        if (week == 8)
        {
            week = 1; txt += "</tr>"}
        }
        txt += "</table>"
        div2 = eval (div)
        div2.innerHTML = txt
}

// função para exibir a janela com os meses
function pop_month(obj, div, tam, ano)
{
  txt  = "<table bgcolor='#CCCCFF' border='0' width=80>"
  for (n = 0; n < 12; n++) { txt += "<tr><td align=center><a href=javascript:popdate('"+obj+"','"+div+"','"+tam+"','"+("01/" + (n+1).toString() + "/" + ano.toString())+"')>" + umonth[n] +"</a></td></tr>" }
  txt += "</table>"
  popd.innerHTML = txt
}

// função para exibir a janela com os anos
function pop_year(obj, div, tam, umonth)
{
  txt  = "<table bgcolor='#CCCCFF' border='0' width=160>"
  l = 1
  for (n=2019; n<2025; n++)
  {  if (l == 1) txt += "<tr>"
     txt += "<td align=center><a href=javascript:popdate('"+obj+"','"+div+"','"+tam+"','"+(umonth.toString () +"/01/" + n) +"')>" + n + "</a></td>"
     l++
     if (l == 4)
        {txt += "</tr>"; l = 1 }
  }
  txt += "</tr></table>"
  popd.innerHTML = txt
}

// função para fechar o calendário
function force_close(div)
    { div2 = eval (div); div2.innerHTML = ''}

// função para fechar o calendário e setar a data no campo de data associado
function block(data, obj, div)
{
    force_close (div)
    obj2 = eval(obj)
    obj2.value = data
}
