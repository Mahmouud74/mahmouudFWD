let x ;
let node; //to createelment li 
var link; //tocreateElement a
let item;
let navList = document.getElementById('navList'); //to access the ul in the navbar to add the li in it
let nodes=['Home','OurStory','Gallery','About']; 
for (let i = 0; i < nodes.length; i++) {
    link=document.createElement('a'); //create anchor link
    link.textContent=nodes[i]; //assign text to anchor link
    link.setAttribute('href',`#${nodes[i].toLowerCase()}`) //assign href to anchor link to be the same as which in the sections id
    node=document.createElement('li');//create li
    node.style.cursor="pointer"; //make the style of li is pointer
    node.appendChild(link); //append the anchor in the li as a child
    node.id=nodes[i]; //assign IDs for each li
    navList.appendChild(node); //append li to the ul
}
let list = document.getElementById('navList').getElementsByTagName('li');
list[0].classList.add('active'); //assign active state to the first section in the WebSite
document.getElementById('nav').addEventListener('click',(e)=>{
    list[0].classList.remove('active');
    //to make anchor link on navbar which clicked is distinct from other anchor links
    if (x!=undefined) { //condition to avoid errors of assign porperties for undefined
        
        if (x.id=='Home'||x.id=='OurStory'||x.id=='Gallery'||x.id=='About') { // to avoid errors of assigned property of undefined and null
            //remove active class from each nonClicked link
            x.classList.remove('active')
        }
    }
    x="";
    if (e.target.id=='Home'||e.target.id=='OurStory'||e.target.id=='Gallery'||e.target.id=='About')
    { //add active class to the link which clicked by the user to make in distinct
       e.target.classList.add('active');
        x=document.getElementById(e.target.id);
    }

//end
})
let animated = document.getElementById('introP');
let pos = animated.style.left;
function animationProcess(){
    // to make the animation process in the home when you load the website
    let mediaQuery = window.matchMedia('(max-width: 1000px)');
    if(mediaQuery.matches){
        if(animated.style.left=='130px'){
            clearInterval(interval);
        }
        else{
            pos++;
            animated.style.left=pos+'px';
        }

    }
    else if(animated.style.left==='300px'){
        clearInterval(interval);
    }
    else{
        pos++;
        animated.style.left=pos+'px';
    }
    
    //end
}
let interval = setInterval(animationProcess, 5) ;

//assigning the offset for each section 
let offset1=document.getElementById('home').offsetTop
let offset2=document.getElementById('ourstory').offsetTop
let offset3=document.getElementById('gallery').offsetTop
let offset4=document.getElementById('about').offsetTop

window.addEventListener("scroll", (e) => {
    //function to make it clear which section is being viewed while scrolling htrough the page 
    let scroll = this.scrollY; // assigning the value of scrollY 'vertical scrolling' to variable scroll to compare it with offsets

    if(scroll >=offset1)//condition on the offset of section 'home' to distinguish home anchor links on the navbar
    {
        //make the style of anchor link 'home' distinct from others by adding active class
        document.getElementById("Home").classList.add('active')
        // make other anchor link as default style of anchor links in navBar style by removing active class
        document.getElementById("OurStory").classList.remove('active');

        document.getElementById("About").classList.remove('active');

        document.getElementById("Gallery").classList.remove('active');
    }
    if(scroll >=offset2)//condition on the offset of section 'OurStory' to distinguish OURSTORY anchor link on the navbar 
    {
        //make the style of anchor link 'ourStory' distinct from others by adding active class
        document.getElementById("OurStory").classList.add('active')
        // make other anchor link as default style of anchor links in navBar style by removing active class
        document.getElementById("Home").classList.remove('active');
        
        document.getElementById("Gallery").classList.remove('active');
        
        document.getElementById("About").classList.remove('active');

    }
    if(scroll >=offset3) //condition on the offset of section 'Gallery' to distinguish Gallery anchor link on the navbar
    {
        //make the style of anchor link 'Gallery' distinct from others by adding active class
        document.getElementById("Gallery").classList.add('active')
        // make other anchor link as default style of anchor links in navBar style by removing active class
        document.getElementById("OurStory").classList.remove('active');
        
        document.getElementById("Home").classList.remove('active');
        
        document.getElementById("About").classList.remove('active');

    }

    if(scroll>=offset4) //condition on the offset of section 'About' to distinguish About anchor link on the navbar
    {
        //make the style of anchor link 'About' distinct from others by adding active class
        document.getElementById("About").classList.add('active')
        // make other anchor link as default style of anchor links in navBar style by removing active class
        document.getElementById("Gallery").classList.remove('active');
        
        document.getElementById("Home").classList.remove('active');
        
        document.getElementById("OurStory").classList.remove('active');
    }
//end
});
