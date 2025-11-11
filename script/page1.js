const content = document.querySelector(".page-content");

function showPage(name) {
    content.innerHTML = pages[name];
}

document.querySelectorAll(".left-bar button").forEach(btn => {
    btn.addEventListener("click", () => {
        showPage(btn.dataset.page);
    });
});

const pages = {
    about:    "<h1>About This Theme</h1><p>为了获得最好的体验，使用此主题请使用全荧幕(F11)<br>最好使用平板或电脑浏览此主题，且使用横向界面<br>主题的操作方式跟一般的系统一样<br>上面导航栏可以切换页面<br>左侧栏位可以查看其他内容<p>",
    why:      "<h1>Why I Choose This Theme?</h1><p>这个主题是我现在在使用的系统的主题<br>系统是Archlinux<br>界面管理器是Hyprland<br>主题是github上大佬的项目'end-4'<br>我很喜欢这个主题，所以制作了这份网站<br>希望能有更多人看到linux的美，而不是只觉得linux就是个很复杂又难搞的系统<br>所以当你看完这个漂亮的系统后，请不要犹豫，一起加入linux的行列！</p>",
    features: "<h1>Theme Features</h1><p>主题中大部分的组件都有小互动特效，如果你仔细翻找这个主题，可能会发现一些有趣的东西<br>由于时间不够，主题中很多按钮虽然有动效，但是并没有实际用途<br>主题中我尽可能的还原了Hyprland界面管理器预设的视窗管理机制<br>毛玻璃的效果是我另外加入的</p>",
    message:  "<h1>Message from Creator</h1><p>这是我的一份学校作业<br>我花了大概超过48个小时在制作这个主题，大部分的图标甚至是我一张一张画出来的，文档也是一个一个字打出来的<br>所以喜欢的话，请记得给我投票</p>",
    image:    "<h1>Tool and Sourse</h1><p>作图网站：https://www.pixilart.com/<br>图片坐标映射：https://www.image-map.net/<br>翻译：https://translate.google.com/<br>Hex to Rgb：https://rgbacolorpicker.com/hex-to-rgba<br>Svg Editor：https://yqnn.github.io/svg-path-editor/</p>",

    profile:  "<h1>KennyCS</h1><p>Student Number: 113590015<br>My Github: https://github.com/Kennyliao369</p>"
};

showPage("about");