function addAnimationOnHover(player) {
    var playerContainer = player.getContainer();

    var controlbar = playerContainer.querySelector('.jw-controlbar');
    var timeSlider = playerContainer.querySelector('.jw-slider-time');
    var title = playerContainer.querySelector('.jw-title');

    var animatedItems = [controlbar, timeSlider, title];

    playerContainer.addEventListener('mouseenter', function () {
        animatedItems.forEach(function (element) {
            element.classList.add('shift');
        });
    });

    playerContainer.addEventListener('mouseleave', function () {
        animatedItems.forEach(function (element) {
            element.classList.remove('shift');
        });
    });
}

function addTheatreButton(player) {
    var playerContainer = player.getContainer();

    var theatreIcon = 
        '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-sharing" viewBox="0 0 240 240" focusable="false">' +
            '<path class="normal-mode" d="M113.2,131.078a21.589,21.589,0,0,0-17.7-10.6,21.589,21.589,0,0,0-17.7,10.6,44.769,44.769,0,0,0,0,46.3,21.589,21.589,0,0,0,17.7,10.6,21.589,21.589,0,0,0,17.7-10.6,44.769,44.769,0,0,0,0-46.3Zm-17.7,47.2c-7.8,0-14.4-11-14.4-24.1s6.6-24.1,14.4-24.1,14.4,11,14.4,24.1S103.4,178.278,95.5,178.278Zm-43.4,9.7v-51l-4.8,4.8-6.8-6.8,13-13a4.8,4.8,0,0,1,8.2,3.4v62.7l-9.6-.1Zm162-130.2v125.3a4.867,4.867,0,0,1-4.8,4.8H146.6v-19.3h48.2v-96.4H79.1v19.3c0,5.3-3.6,7.2-8,4.3l-41.8-27.9a6.013,6.013,0,0,1-2.7-8,5.887,5.887,0,0,1,2.7-2.7l41.8-27.9c4.4-2.9,8-1,8,4.3v19.3H209.2A4.974,4.974,0,0,1,214.1,57.778Z"></path>' +
            '<path class="theatre-mode" d="M175,160c-6.9,0.2-13.6,2.6-19,7l-62-39c0.8-2.6,1.2-5.3,1-8c0.2-2.7-0.2-5.4-1-8l62-39c5.4,4.4,12.1,6.8,19,7c16.3,0.3,29.7-12.6,30-28.9c0-0.4,0-0.7,0-1.1c0-16.5-13.5-30-30-30s-30,13.5-30,30c-0.2,2.7,0.2,5.4,1,8L84,97c-5.4-4.4-12.1-6.8-19-7c-16.5,0-30,13.5-30,30s13.5,30,30,30c6.9-0.2,13.6-2.6,19-7l62,39c-0.8,2.6-1.2,5.3-1,8c0,16.5,13.5,30,30,30s30-13.5,30-30S191.6,160,175,160z"></path>' +
        '</svg>';
    player.addButton(theatreIcon, 'Theatre', () => {
        var playerClassList = playerContainer.classList;
        if (playerClassList.contains('theatre')) {
            playerClassList.remove('theatre');
        } else {
            playerClassList.add('theatre');
        }
    }, 'settings-theatre', 'kvp-settings-theatre');
}

function addShareButton(player) {
    var playerContainer = player.getContainer();
    var title = playerContainer.querySelector('.jw-title');

    var shareIcon = 
        '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-sharing" viewBox="0 0 240 240" focusable="false">' +
        '<path d="M175,160c-6.9,0.2-13.6,2.6-19,7l-62-39c0.8-2.6,1.2-5.3,1-8c0.2-2.7-0.2-5.4-1-8l62-39c5.4,4.4,12.1,6.8,19,7c16.3,0.3,29.7-12.6,30-28.9c0-0.4,0-0.7,0-1.1c0-16.5-13.5-30-30-30s-30,13.5-30,30c-0.2,2.7,0.2,5.4,1,8L84,97c-5.4-4.4-12.1-6.8-19-7c-16.5,0-30,13.5-30,30s13.5,30,30,30c6.9-0.2,13.6-2.6,19-7l62,39c-0.8,2.6-1.2,5.3-1,8c0,16.5,13.5,30,30,30s30-13.5,30-30S191.6,160,175,160z"></path>' +
        '</svg>';
    player.addButton(shareIcon, 'Share', () => alert('Share'), 'settings-sharing', 'kvp-settings-sharing');

    title.appendChild(playerContainer.querySelector('.kvp-settings-sharing'));
}

function wrapTitleInAnchor(player) {
    var primaryTitle = player.getContainer().querySelector('.jw-title-primary');

    var primaryTitleAnchor = document.createElement('a');
    primaryTitleAnchor.innerHTML = primaryTitle.innerHTML;
    primaryTitleAnchor.href = '//localhost/jwplayer';

    primaryTitle.innerHTML = '';
    primaryTitle.appendChild(primaryTitleAnchor);
}

function addProgressTimeTooltip(player) {
    var playerContainer = player.getContainer();

    var newTooltip = document.createElement('div');
    newTooltip.className = 'jw-icon jw-icon-tooltip kvp-tooltip-time-progress jw-button-color jw-reset';
    playerContainer.querySelector('.jw-slider-container').appendChild(newTooltip);

    var newOverlay = document.createElement('div');
    newOverlay.className = 'jw-overlay jw-reset';
    newTooltip.appendChild(newOverlay);

    var newTipTime = document.createElement('div');
    newTipTime.className = 'jw-time-tip jw-reset';
    newOverlay.appendChild(newTipTime);

    var newText = document.createElement('span');
    newText.className = 'jw-text jw-reset';
    newTipTime.appendChild(newText);

    var timeSlider = playerContainer.querySelector('.jw-slider-time');

    timeSlider.addEventListener('mouseenter', () => newTooltip.classList.add('jw-open'));

    timeSlider.addEventListener('mouseleave', () => newTooltip.classList.remove('jw-open'));

    player.on('time', e => {
        var duration = e.duration;
        var position = e.position;

        newTooltip.style.left = (position / duration * 100) + '%';

        var minutes = Math.floor(position / 60);
        var seconds = Math.floor(position % 60);

        newText.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    });
}

jwplayer().on('ready', function () {
    var player = jwplayer();

    addAnimationOnHover(player);
    addTheatreButton(player);
    addShareButton(player);
    wrapTitleInAnchor(player);
    addProgressTimeTooltip(player);
});