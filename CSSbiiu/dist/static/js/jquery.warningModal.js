(function($){
    var defaultOptions={
        lang:'zh',
        title:'',
        content:'',
        width:'300px',
        type:'alert',
    };

    var WMlang={
        en:{
            confirm:'OK'
        },
        zh:{
            confirm:'确定'
        }
    };
    $.extend({
        warningModal:function(option,fn){
            var pluginMethods={
                options:null,
                init:function(option){
                    options=$.extend(defaultOptions,option);
                },
                hidemodal:function(){
                    $(".warningModal").remove();
                },
                renderBtn:function(type,fn){
                    var _this=this;
                    var confirmBtn=$("<input type='button' class='btn btn-primary' value='确定'/>");
                    var cancelBtn=$("<input type='button' class='btn btn-primary' value='取消'/>");
                    confirmBtn.click(function(){
                        _this.confirm(options.confirm);
                    });
                    cancelBtn.click(function(){
                        _this.cancel(options.cancel);
                    });
                    confirmBtn.css({
                        'width':'115px',
                        'margin-right':'10px',
                    });
                    cancelBtn.css({
                        'width':'115px'
                    });

                    if(fn){
                        if(type=="alert"){
                            fn(confirmBtn);
                        }else{
                            fn(confirmBtn);
                            fn(cancelBtn);
                        }

                    }
                },
                confirm:function(fn){
                    this.hidemodal();
                    if(fn){
                        fn();
                    }
                },
                cancel:function(fn){
                    this.hidemodal();
                    if(fn){
                        fn();
                    }
                }
            };
            if(option){
               pluginMethods.init(option);
            }


            var modal=$("<div class='warningModal'></div>").appendTo(document.body);
            var dialog=$("<div class='WMdialog'></div>").appendTo(modal);
            var title=$("<span class='WMtitle'></span>");
            var content=$("<div style='width:100%;max-height: 200px;overflow: auto' class='WMcontent'></div>").appendTo(dialog);

            //title
            // if(defaultOptions.title){
            //     title.text(defaultOptions.title);
            //     title.appendTo(dialog);
            // }
            //content
            content.html(defaultOptions.content);

            //button
            var type=defaultOptions.type;
            pluginMethods.renderBtn(type,function(html){
                dialog.append(html);
            });

            //样式
            modal.css({
                'background-color':'rgba(0,0,0,0.4)',
                'z-index':'9999',
                'position':'fixed',
                'top':'0',
                'bottom':'0',
                'right':'0',
                'left':'0',
                'color':'#465161',
            });

            dialog.css({
                'width':defaultOptions.width,
                'margin':'0 auto',
                'background-color':'white',
                'text-align':'center',
                'border-radius':'4px',
                'position':'relative',
                'padding':'20px 20px'
            });
            title.css({
                'display':'block',
                'background-color':'#F8F8F8',
                'padding':'5px 0',
            });
            content.css({
                'padding':'20px 10px',
                'word-break':'break-word'
            });

            var dialog_top=($(window).innerHeight()-dialog.height())/2;
            dialog.css('top',dialog_top);

        }
    });


})(jQuery);
