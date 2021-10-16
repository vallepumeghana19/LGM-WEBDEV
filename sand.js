var nlink=document.getElementById("nlink");
        function showMenu(){
            nlink.style.right="0";
        }
        function hideMenu(){
            nlink.style.right="-200px";
        }

        window.onscroll = function() {moveit()};

        var navbar = document.getElementById("bar");
        var sticky = navbar.offsetTop;
        function moveit() {
        if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        } else {
        navbar.classList.remove("sticky");
       }
    }
