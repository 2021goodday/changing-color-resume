
    function changeColors() {
        var body = document.body;
        var leftSideDiv = document.querySelector('.left_Side');
        var rightSideDiv = document.getElementById('rightSide');
        var h2Elements = rightSideDiv.querySelectorAll('h2');
        var pElements = rightSideDiv.querySelectorAll('p');
        var skillDivs = rightSideDiv.querySelectorAll('[data-knowledge]');
        var nonSkillH4Elements = rightSideDiv.querySelectorAll('.about:not(.skills) h4');
        var svgIcons = document.querySelectorAll('.fa');
        var leftSideH5Elements = leftSideDiv.querySelectorAll('h5');
        
        var currentColor = window.getComputedStyle(rightSideDiv, null).getPropertyValue('background-color');
        
        if (currentColor === 'rgb(0, 0, 0)' || currentColor === 'black') {
            rightSideDiv.style.backgroundColor = ''; 
            
            h2Elements.forEach(function (h2) {
                h2.style.color = '';
            });
            
            pElements.forEach(function (p) {
                p.style.color = '';
            });
            
            skillDivs.forEach(function (skillDiv) {
                skillDiv.style.backgroundColor = '';
            });
            
            nonSkillH4Elements.forEach(function (h4) {
                h4.style.color = '';
            });

            body.style.backgroundColor = '';

            leftSideDiv.style.backgroundColor = '';

            svgIcons.forEach(function (icon) {
                icon.style.color = '';
            });

            leftSideH5Elements.forEach(function (h5) {
                h5.style.color = '';
            });

            leftSideH2Elements.forEach(function (h2) {
                h2.style.color = '';
            });

        } else {
            rightSideDiv.style.backgroundColor = 'black';
            
            h2Elements.forEach(function (h2) {
                h2.style.color = '#794bc4';
            });
            
            pElements.forEach(function (p) {
                p.style.color = '#EDEADE';
            });
            
            skillDivs.forEach(function (skillDiv) {
                skillDiv.style.backgroundColor = '#9575CD';
            });
            
            nonSkillH4Elements.forEach(function (h4) {
                h4.style.color = '#9575CD';
            });

            body.style.backgroundColor = '#301934';

            leftSideDiv.style.backgroundColor = '#4A235A';

            svgIcons.forEach(function (icon) {
                icon.style.color = '#794bc4';
            });

            leftSideH5Elements.forEach(function (h5) {
                h5.style.color = '#848c90';
            });

            leftSideH2Elements.forEach(function (h2) {
                h2.style.color = '#EDEADE';
            });
        }
    }

