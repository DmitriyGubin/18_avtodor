/*********удалить************/
function Show_Hide_Something(hide_box_ref, button_ref)
{
	button_ref.on('click', function() {
		hide_box_ref.toggleClass('hide');
		Click_Out_Something(hide_box_ref, 'hide', 'mark_class');
	});
}

Show_Hide_Something($('header .about_pers'), $('header #this_prof_button'));
Show_Hide_Something($('footer .quest_box'), $('footer .obj_box .quest_img'));
/*********удалить************/

function Click_Out_Something(hide_box_ref, hide_class, mark_class)
{
	if(!hide_box_ref.hasClass(hide_class))
	{
		document.onclick = function (e) {
			let all_classes = e.target.className;
			if (!all_classes.includes(mark_class))
			{
				hide_box_ref.addClass(hide_class);
			}
		};
	}
}

function Show_Hide_Something(hide_box_ref, button_ref)
{
	button_ref.on('click', function() {
		hide_box_ref.toggleClass('hide');
		Click_Out_Something(hide_box_ref, 'hide', 'mark_class');
	});
}

Show_Hide_Something($('.detail .quest_box'), $('.detail .status'));


// Делим на разряды числа

function digits_int(input_ref)
{
	val = input_ref.val().replace(/[^0-9]/g, '');
	val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	input_ref.val(val);
}

function digits_int_init()
{
	var inputs = $('.form_input');

	inputs.on('input', function(){
		digits_int($(this));
	});

	inputs.each(function(){
		digits_int($(this));
	});
}

digits_int_init();

// Делим на разряды числа


/**********добавление новой техники/работника***********/

function Create_Tags_Tech()
{
	var date = new Date();
	var id = 'new_' + date.getTime();

	tegs_tech = `
	<div class="smth_box option_box for_focus" data-idtech="${id}">
		<div class="top_box">
			<div class="left_info">
				<div class="prop_item">
					<div class="prop_name">Техника</div>
					<div class="prop_value">Данные с 1С</div>
				</div>

				<div class="prop_item">
					<div class="prop_name">Назначенная</div>
					<div class="prop_value assigned_tech no_add">Не выбрана техника</div>
				</div>

				<div class="prop_item">
					<div class="prop_name">Норма</div>
					<div class="prop_value">10 часов</div>
				</div>
			</div>

			<div class="button_box_rules">
				<a class="choose popup-avto form_manag_button" data-idtech="${id}" data-fancybox="" data-src="#popup_avto" href="javascript:;">
					<span class="for_desctop">Выбрать</span>
					<span class="for_mobile hide">Выбрать технику</span>
				</a>

				<img class="remoove_items hide mark_class" src="img/basket.svg">
				<div class="check_remoove_box hide mark_class">
					<div class="remoove_quest mark_class">Удалить данную технику из списка задачи?</div>
					<div class="rem_button_line mark_class">
						<button class="leave mark_class">Оставить</button>
						<button class="remoove_butt mark_class">Удалить</button>
					</div>
				</div>
			</div>
		</div>

		<div class="bottom_box insert_input_box">
			<div class="fact_box">
				<div class="fact_text">Факт выполнения</div>

				<div class="for_mobile_line">
					<div class="inp_box">
						<input data-curval="0" class="form_input for_listen" type="text" placeholder="0">
						<span>ч</span>
						<span>&nbsp;&nbsp;/&nbsp;&nbsp;<span class="full_fact_val">10</span> ч</span>
					</div>

					<div class="full for_mobile hide">
						<img src="img/full.svg">
						<div>Макс.</div>
					</div>
				</div>
			</div>

			<div class="full hide for_desc">
				<img src="img/full.svg">
				<div>Макс. значение</div>
			</div>
		</div>
	</div>
	`;

	return tegs_tech;
}

function Create_Tags_Pers()
{
	var date = new Date();
	var id = 'new_' + date.getTime();

	var tegs_pers = `
	<div class="smth_box option_box for_focus" data-idpers="${id}">
		<div class="top_box">
			<div class="left_info">
				<div class="prop_item">
					<div class="prop_name">Работник</div>
					<div class="prop_value no_add position">Не выбран работник</div>
				</div>

				<div class="prop_item">
					<div class="prop_name">Назначен</div>
					<div class="prop_value no_add fio">Не выбран работник</div>
				</div>

				<div class="prop_item">
					<div class="prop_name">Норма</div>
					<div class="prop_value">Данные с 1С</div>
				</div>
			</div>
			
			<div class="button_box_rules">
				<a data-idpers="${id}" class="choose form_manag_button popup-workers" data-fancybox="" data-src="#popup_workers" href="javascript:;">
					<span class="for_desctop">Выбрать</span>
					<span class="for_mobile hide">Выбрать работника</span>
				</a>

				<img class="remoove_items hide mark_class" src="img/basket.svg">
				<div class="check_remoove_box hide mark_class">
					<div class="remoove_quest mark_class">Удалить данного работника из списка задачи?</div>
					<div class="rem_button_line mark_class">
						<button class="leave mark_class">Оставить</button>
						<button class="remoove_butt mark_class">Удалить</button>
					</div>
				</div>
			</div>
		</div>

		<div class="bottom_box insert_input_box">
			<div class="fact_box">
				<div class="fact_text">Факт выполнения</div>
				
				<div class="for_mobile_line">
					<div class="inp_box">
						<input data-curval="0" class="form_input for_listen" type="text" placeholder="0">
						<span>ч</span>
						<span>&nbsp;&nbsp;/&nbsp;&nbsp;<span class="full_fact_val">20</span> ч</span>
					</div>

					<div class="full for_mobile hide">
						<img src="img/full.svg">
						<div>Макс.</div>
					</div>
				</div>
			</div>

			<div class="full hide for_desc">
				<img src="img/full.svg">
				<div>Макс. значение</div>
			</div>
		</div>
	</div>
	`;

	return tegs_pers;
}

function Create_Tags_Material()
{
	var date = new Date();
	var id = 'new_' + date.getTime();//${id}

	var tegs_mat = `
		<div class="material_box option_box for_focus" data-idmat="${id}">
			<div class="top_box">
				<div class="left_info">
					<div class="prop_item">
						<div class="prop_name">Материал</div>
						<div class="prop_value mat_name no_add">Не выбран материал</div>
					</div>

					<div class="prop_item">
						<div class="prop_name">Норма</div>
						<div class="prop_value mat_norma"></div>
					</div>
				</div>

				<div class="button_box_rules">
					<a data-idmat="${id}" data-fancybox="" data-src="#popup_materials" href="javascript:;" class="popup-mat choose form_manag_button">
						<span class="for_desctop">Выбрать</span>
						<span class="for_mobile hide">Выбрать материал</span>
					</a>

					<img class="remoove_items hide mark_class" src="img/basket.svg">
					<div class="check_remoove_box hide mark_class">
						<div class="remoove_quest mark_class">Удалить данный материал из списка задачи?</div>
						<div class="rem_button_line mark_class">
							<button class="leave mark_class">Оставить</button>
							<button class="remoove_butt mark_class">Удалить</button>
						</div>
					</div>
				</div>
			</div>

			<div class="bottom_box insert_input_box">
				<div class="fact_box">
					<div class="fact_text">Факт выполнения</div>
					<div class="for_mobile_line">
						<div class="inp_box">
							<input data-curval="0" class="form_input for_listen" type="text" placeholder="0">
							<span class="mat_unit"></span>
							<span>&nbsp;&nbsp;/&nbsp;&nbsp;
								<span class="full_fact_val">10</span>
								<span>&nbsp;</span>
								<span class="mat_unit"></span>
							</span>
						</div>

						<div class="full for_mobile hide">
							<img src="img/full.svg">
							<div>Макс.</div>
						</div>
					</div>
				</div>

				<div class="full hide for_desc">
					<img src="img/full.svg">
					<div>Макс. значение</div>
				</div>
			</div>
		</div>
	`;

	return tegs_mat;
}

var insert_here_tech = document.querySelector('#all_tech_box');

$('#add_avto').on('click',() => Add_Something_To_List(Create_Tags_Tech(),insert_here_tech));

var insert_here_pers = document.querySelector('#all_worker_box');

$('#add_worker').on('click',() => Add_Something_To_List(Create_Tags_Pers(),insert_here_pers));

var insert_here_material = document.querySelector('#all_material_box');

$('#add_material').on('click',() => Add_Something_To_List(Create_Tags_Material(),insert_here_material));

function Add_Something_To_List(tegs,insert_here)
{
	var div= document.createElement('div');

	div.innerHTML=tegs;

	insert_here.insertBefore(div, insert_here.firstElementChild);
	digits_int_init();
	Fill_Hide_Ids();
	All_Fancybox_Init();
	Full_Plan();
	For_Input_Focuse();
	Listen_Input_Changes();
}
/**********добавление новой техники/работника***********/


/*****************Логика попапов*************/
/*********переключатель дорожная техника или кортрагентов*****************/
$('#popup_avto .title_item').on('click', function() {
	$('#popup_avto .title_item').removeClass('active');
	$(this).addClass('active');
	$('#popup_avto .smth_box').addClass('hide');
	let id = $(this).attr('id');
	if (id == 'road')
	{
		$('#popup_avto .smth_box.road_equipment').removeClass('hide');
	}
	else
	{
		$('#popup_avto .smth_box.сounterparty_equipment').removeClass('hide');
	}
});

/*********переключатель дорожная техника или кортрагентов*****************/


/************выбор чего нибудь***************/
// function Switch(items_jquery_sellector, active_class)
// {
// 	items_jquery_sellector.on('click', function() {
// 		items_jquery_sellector.removeClass(active_class);
// 		$(this).addClass(active_class);
// 	});
// }

function All_Fancybox_Init()
{
	Fancybox_Init(
	$('.popup-workers'),
	$('#take_this_person'),
	$('#popup_workers .smth_item'),
	'#popup_workers .smth_item.free'
	);

	Fancybox_Init(
		$('.popup-avto'),
		$('#take_this_avto'),
		$('#popup_avto .smth_item'),
		'#popup_avto .smth_item.free'
	);

	Fancybox_Init(
		$('.popup-mat'),
		$('#take_this_material'),
		$('#popup_materials .smth_item'),
		'#popup_materials .smth_item.free'
	);
}

Fancybox_Init(
		$('#create_new_job'),
		$('#take_this_job'),
		$('#popup_jobs .smth_item'),
		'#popup_jobs .smth_item'
	);

All_Fancybox_Init();

function Fancybox_Init(popup_ref,choose_button_ref,all_items_ref,free_items_selector)//все ссылки jquery
{
	popup_ref.fancybox({
	    afterLoad : function(){
	    		//choose_button_ref.addClass('not_active').off();
	    		choose_button_ref.addClass('not_active');
	    		choose_button_ref.attr('data-iditem','');
	    		all_items_ref.off();
	    		Switch_Items_Something($(free_items_selector), choose_button_ref);
	        },
	    beforeClose : function(){
	    		//console.log('close');
	        }
	});
}


/************выбор чего нибудь***************/
function Choose_Button_ID_To_Atr_Name(button_id)
{
	if(button_id == 'take_this_avto')
	{
		return 'data-idtech';
	}
	else if(button_id == 'take_this_person')
	{
		return 'data-idpers';
	}
	else if(button_id == 'take_this_material')
	{
		return 'data-idmat';
	}
	else if(button_id == 'take_this_job')
	{
		return 'data-idjob';
	}
}

function Switch_Items_Something(items_jquery_ref, choose_button_ref)
{
	var button_id = choose_button_ref.attr('id');
	
	var atr = Choose_Button_ID_To_Atr_Name(button_id);

	items_jquery_ref.on('click', function() {
		items_jquery_ref.removeClass('active');
		$(this).addClass('active');
	    //Active_Сhoice_Button(choose_button_ref,this);
	    choose_button_ref.removeClass('not_active');
	    var id = $(this).attr(atr);
	    choose_button_ref.attr('data-iditem',id);
	});
}


/***********добавить работу из проекта**********/
$('#popup_jobs #take_this_job').on('click', function() {
	var id_item = $(this).attr('data-iditem');
	if(id_item == '')
	{
		return;
	}
	else
	{
		var item_selector = '#popup_jobs [data-idjob="' + id_item + '"]';

		let id = id_item;
    	var job_name = $(item_selector).find('.smth_name').html();

    	var div= document.createElement('div');//
		div.innerHTML = `
			<div class="cat_item" data-idjob="${id}">
				<div class="cat_name">${job_name}</div>
				<div class="round" style="background: #BD9DFF"></div>
			</div>
		`;

		var insert_here = document.querySelector('.job_catigory.list');

		insert_here.insertBefore(div, insert_here.firstElementChild);

		var all_jobs_ref = $('.all_jobs_numb');
		var total_jobs = Number(all_jobs_ref.html()) + 1;

		all_jobs_ref.html(total_jobs);

    	$(item_selector).remove();

    	/******добавление полоски******/
    	var line= document.createElement('div');
    	line.classList.add("color_line_item");
    	var new_width = 'calc(100%/' + total_jobs +' - 5px)';
    	line.style.width = new_width;
    	line.style.background = '#BD9DFF';
    	$('.color_line_item').css('width', new_width);
    	var insert_here = document.querySelector('footer .color_line');
		insert_here.insertBefore(line, insert_here.firstElementChild);
    	/******добавление полоски******/

    	/*******************/

	    $.fancybox.close();
	    Init_Save_Box();
	}
});
/***********добавить работу из проекта**********/

/***********добавить технику**********/
$('#popup_avto #take_this_avto').on('click', function() {
	var id_item_db = $(this).attr('data-iditem');
	if(id_item_db == '')
	{
		return;
	}
	else
	{
		var item_selector = '#popup_avto [data-idtech="' + id_item_db + '"]';

		$(item_selector).removeClass('active free').addClass('not');
		var item_id = $('.hide_id_tech.hide').html();
		var avto_name = $(item_selector).find('.smth_name').html();
		var selector_butt = '[data-idtech="' + item_id + '"]';
		$(selector_butt + ' .assigned_tech').html(avto_name).removeClass('no_add');

		var tech_id = $(item_selector).attr('data-idtech');
		$('#all_tech_box ' + selector_butt).attr('data-idtech', tech_id);
		var new_selector_attr = '[data-idtech="' + tech_id + '"]';

		$('#popup_avto ' + selector_butt).removeClass('not').addClass('free');

		var button_title = (screen.width > 750) ? 'Заменить': 'Заменить технику';

		$(new_selector_attr + ' .form_manag_button').html(button_title).removeClass('choose').addClass('replace');
		$(new_selector_attr + ' .full.hide.for_desc').removeClass('hide');
		$(new_selector_attr + ' .remoove_items').removeClass('hide');

		Delete_Items();

		$.fancybox.close();
		Init_Save_Box();
	}
});
/***********добавить технику**********/

/***********добавить материал**********/
$('#popup_materials #take_this_material').on('click', function() {
	var id_item_db = $(this).attr('data-iditem');
	if(id_item_db == '')
	{
		return;
	}
	else
	{
		var item_selector = '#popup_materials [data-idmat="' + id_item_db + '"]';
		$(item_selector).removeClass('active free').addClass('not');
		var item_id = $('.hide_id_material.hide').html();
		var mat_name = $(item_selector).find('.smth_name').html();
		var mat_unit = $(item_selector).find('.smth_num').html();
		var selector_butt = '[data-idmat="' + item_id + '"]';
		$(selector_butt + ' .mat_name').html(mat_name).removeClass('no_add');
		$(selector_butt + ' .insert_input_box .mat_unit').html(mat_unit);
		$(selector_butt + ' .mat_norma').html('Данные из 1С');
		var mat_id = $(item_selector).attr('data-idmat');
		$('#all_material_box ' + selector_butt).attr('data-idmat', mat_id);
		var new_selector_attr = '[data-idmat="' + mat_id + '"]';
		$('#popup_materials ' + selector_butt).removeClass('not').addClass('free');
		var button_title = (screen.width > 750) ? 'Заменить': 'Заменить материал';

		$(new_selector_attr + ' .form_manag_button').html(button_title).removeClass('choose').addClass('replace');
		$(new_selector_attr + ' .full.hide.for_desc').removeClass('hide');
		$(new_selector_attr + ' .remoove_items').removeClass('hide');

		Delete_Items();

		$.fancybox.close();
		Init_Save_Box();
	}
});
/***********добавить материал**********/

/***********добавить работника**********/
$('#popup_workers #take_this_person').on('click', function() {
	var id_item_db = $(this).attr('data-iditem');
	if(id_item_db == '')
	{
		return;
	}
	else
	{
		var item_selector = '#popup_workers [data-idpers="' + id_item_db + '"]';

		$(item_selector).removeClass('active free').addClass('not');
		var item_id = $('.hide_id_pers.hide').html();
		var pers_name = $(item_selector).find('.smth_name').html();
		var pers_pos = $(item_selector).find('.smth_num').html();
		var selector_butt = '[data-idpers="' + item_id + '"]';//скрытый
		$(selector_butt + ' .prop_value.position').html(pers_pos).removeClass('no_add');
		$(selector_butt + ' .prop_value.fio').html(pers_name).removeClass('no_add');

		var pers_id = $(item_selector).attr('data-idpers');
		$('#all_worker_box ' + selector_butt).attr('data-idpers', pers_id);
		var new_selector_attr = '[data-idpers="' + pers_id + '"]';

		$('#popup_workers ' + selector_butt).removeClass('not').addClass('free');
		var button_title = (screen.width > 750) ? 'Заменить': 'Заменить работника';

		$(new_selector_attr + ' .form_manag_button').html(button_title).removeClass('choose').addClass('replace');
	    $(new_selector_attr + ' .full.hide.for_desc').removeClass('hide');
	    $(new_selector_attr + ' .remoove_items').removeClass('hide');

	    Delete_Items();

	    $.fancybox.close();
	    Init_Save_Box();
	}
});
/***********добавить работника**********/


/********длополнительные опции*********/
$('.popup_avto_workers .choice_box').each(function() {

	let var_box = $(this).find('.var_box');
	$(this).find('.this_var').on('click', function() {
		var_box.toggleClass('hide');
		Click_Out_Something(var_box, 'hide', 'mark_class');
	});

	let list_vars = $(this).find('.var_item');
	let cur_var = $(this).find('.this_var div');
	list_vars.on('click', function() {
		list_vars.removeClass('active');
		$(this).addClass('active');
		let text = $(this).find('.var_text').html();
		cur_var.html(text);
		var_box.addClass('hide');
	});
});


$('#only_free_avto').on('click', function() {
	$('#popup_avto .smth_item.not').addClass('hide');
});

$('#all_tech_var').on('click', function() {
	$('#popup_avto .smth_item.not.hide').removeClass('hide');
});

/********длополнительные опции*********/


/*********полное выполнение кнопка************/
function Full_Plan()
{
	$('.insert_input_box').each(function() {

		let full_fact = $(this).find('.full_fact_val');
		let full_fact_val = full_fact.html();
		let inputt = $(this).find('.form_input');

		// let for_ceck_full = full_fact_val.replace(/\s/g, '');
		// for_ceck_full = Number(for_ceck_full);

		// let for_ceck_inp = Convert_Input_Value_To_Num(inputt);

		$(this).find('.full').on('click', function() {
			inputt.val(full_fact_val);
			Init_Save_Box();
		});
	});
}

Full_Plan();
/*********полное выполнение кнопка************/

$('.plan_form_buttons').on('click', function() {
	$.fancybox.close();
});


/**************причина***************/
$('#popup_plan .this_var').on('click', function() {
	let hide_box_ref = $('#popup_plan .vars');
	hide_box_ref.toggleClass('hide');
	Click_Out_Something(hide_box_ref, 'hide', 'mark_class');
});

$('#popup_plan .var_item').on('click', function() {
	let text = $(this).html();
	$('#popup_plan #cur_var').html(text);
	$('#popup_plan .vars').addClass('hide');

	let reason_box_ref = $('#reason_text');
	if( $(this).hasClass('text'))
	{
		reason_box_ref.removeClass('hide');
	}
	else
	{
		reason_box_ref.addClass('hide');
	}
});

/**************причина***************/

function Click_Out_Something(hide_box_ref, hide_class, mark_class)
{
	if(!hide_box_ref.hasClass(hide_class))
	{
		document.onclick = function (e) {
			let all_classes = e.target.className;
			if (!all_classes.includes(mark_class))
			{
				hide_box_ref.addClass(hide_class);
			}
		};
	}
}
/*****************Логика попапов*************/


function Fill_Hide_Ids()
{
	$('.form_manag_button').on('click', function() {
		if($(this).hasClass('popup-workers'))
		{
			$('.hide_id_pers.hide').html($(this).attr('data-idpers'));
		}
		else if($(this).hasClass('popup-avto'))
		{
			$('.hide_id_tech.hide').html($(this).attr('data-idtech'));
		}
		else if($(this).hasClass('popup-mat'))
		{
			$('.hide_id_material.hide').html($(this).attr('data-idmat'));
		}
	});
}

Fill_Hide_Ids();

/*************табы**************/
if(screen.width < 750)
{
	$('.tub_box').each(function() {
		let tab_list = $(this).find('.tub_list');
		let arrow = $(this).find('.tab_arrow');

		$(this).find('.tub_button').on('click', function() {
			tab_list.slideToggle(500);
			arrow.toggleClass('active');
		});
	});
}
/*************табы**************/

/**************удаление из списка************/
function Delete_Items()
{
	$('.option_box').each(function() {
		let remoove_box = $(this).find('.check_remoove_box');
		let this_box = $(this);
		let basket = $(this).find('.remoove_items');
		
		basket.off();
		basket.on('click', function() {
			remoove_box.toggleClass('hide');
			Click_Out_Something(remoove_box, 'hide', 'mark_class');
		});

		$(this).find('.leave').on('click', function() {
			remoove_box.toggleClass('hide');
		});

		$(this).find('.remoove_butt').on('click', () => Delete_One_Item(this_box));
	});
}

function Delete_One_Item(this_item_ref)
{
	var id;
	if(this_item_ref.attr('data-idtech') != undefined)
	{
		id = this_item_ref.attr('data-idtech');
		var selector_atr = '[data-idtech="' + id + '"]';
		$('#popup_avto ' + selector_atr).removeClass('not').addClass('free');
	}
	else if(this_item_ref.attr('data-idpers') != undefined)
	{
		id = this_item_ref.attr('data-idpers');
		var selector_atr = '[data-idpers="' + id + '"]';
		$('#popup_workers ' + selector_atr).removeClass('not').addClass('free');
	}
	else if(this_item_ref.attr('data-idmat') != undefined)
	{
		id = this_item_ref.attr('data-idmat');
		var selector_atr = '[data-idmat="' + id + '"]';
		$('#popup_materials ' + selector_atr).removeClass('not').addClass('free');
	}

	this_item_ref.remove();
	Init_Save_Box();
}

Delete_Items();

/**************удаление из списка************/

/*********фокус на инпуте***********/
function For_Input_Focuse()
{
	$('.for_focus').each(function() {
		var this_box = $(this);
		var imput_ref = $(this).find('input');

		imput_ref.on('focus', function(){
			this_box.addClass('active');
		});

		imput_ref.on('blur', function(){
			this_box.removeClass('active');
		});
	});
}

For_Input_Focuse();
/*********фокус на инпуте***********/


/*************логика сохранения***********/

function Init_Save_Box()
{
	$('.save_box').removeClass('hide');
	$('.cancel_execution.desctop').addClass('hide');
	$('footer .quest_boxx').addClass('hide');

	if(screen.width < 750)
	{
		$('footer .save_box_mobile').removeClass('hide');
	}
}

function Remoove_Save_Box()
{
	$('.save_box').addClass('hide');
	$('.cancel_execution.desctop').removeClass('hide');
	$('footer .quest_boxx').removeClass('hide');

	if(screen.width < 750)
	{
		$('footer .save_box_mobile').addClass('hide');
	}
}

$('.cancel_execution').on('click', function(){
	$('#popup_plan #main_fact').val('0');
});

$('.save_box .save_list').on('click', function(){
	let main_val = $('#top_inp_main').val();
	$('#popup_plan #main_fact').val(main_val);
});

//Init_Save_Box();

/****отслеживание изменения в инпутах для сохранения******/
function Convert_Input_Value_To_Num(input_ref)
{
	var val = input_ref.val();
	val = val.replace(/\s/g, '');
	val = Number(val);
	return val;
}

function Convert_Tag_Value_To_Num(tag_ref)
{
	var val = tag_ref.html();
	val = val.replace(/\s/g, '');
	val = Number(val);
	return val;
}

function Listen_Input_Changes()
{
	$('.for_listen').on('input', function(){

		var inp_val = Convert_Input_Value_To_Num($(this));
		if(inp_val != $(this).attr('data-curval'))
		{
			Init_Save_Box();
		}
		else
		{
			Remoove_Save_Box();
		}
	});
}

Listen_Input_Changes();
/****отслеживание изменения в инпутах для сохранения******/

var full_val = $('#popup_plan .full_fact_val').html();
full_val = full_val.replace(/\s/g, '');
full_val = Number(full_val);

var good_ref = $('.about_text.good');
var not_good_ref = $('.about_text.not_good');
var about_reason_ref = $('#popup_plan .about_reason');

function Good_Save()
{
	not_good_ref.addClass('hide');
	good_ref.removeClass('hide');
	about_reason_ref.addClass('hide');
}

function Not_Good_Save()
{
	not_good_ref.removeClass('hide');
	good_ref.addClass('hide');
	about_reason_ref.removeClass('hide');
}

var full_val_top = Convert_Tag_Value_To_Num($('.main_info .full_fact_val'));
$('.save_box .save_list').fancybox({
	afterLoad : function(){
		if(full_val_top == Convert_Input_Value_To_Num($('.main_info #top_inp_main')))
		{
			Good_Save();
		}
		else
		{
			Not_Good_Save();
		}
	}
});

$('#popup_plan #main_fact').on('input', function(){
	
	var val = $(this).val();
	val = val.replace(/\s/g, '');
	val = Number(val);

	if(val == full_val)
	{
		Good_Save();
	}
	else
	{
		Not_Good_Save();
	}
});

$('#popup_plan .full').on('click', function(){
	not_good_ref.addClass('hide');
	good_ref.removeClass('hide');
	about_reason_ref.addClass('hide');
});

/*******клик по кнопке сохранить план******/
$('#popup_plan #save_plan_form').on('click', function(){
	$('.for_listen').each(function(){
		if($(this).val() == '')
		{
			$(this).attr('data-curval', '0');
		}
		else
		{
			$(this).attr('data-curval', Convert_Input_Value_To_Num($(this)));
		}
	});
	Remoove_Save_Box();
});

/*************логика сохранения***********/

/***************Изменение цвета кнопки статус выполнения***********/
function Calibrate(val)
{
	var res = [];//код цвета, статус десктоп, мобильная
	if(val == 0)
	{ 
		res[0] = '#BD9DFF';
		res[1] = 'Не работали';
		res[2] = 'Не работали';
	}
	else if((val > 0) && (val < 0.25))
	{ 
		res[0] = '#D2D9E5';
		res[1] = 'Ожидает выполнения';
		res[2] = 'Ожидает выполне...';
	}
	else if((val >= 0.25) && (val < 0.5))
	{ 
		res[0] = '#FFD873';
		res[1] = 'Частичное выполнение';
		res[2] = 'Частичное выпол...';
	}
	else if((val >= 0.5) && (val <= 0.99))
	{ 
		res[0] = '#FF8268';
		res[1] = 'Частичное выполнение';
		res[2] = 'Частичное выпол...';
	}
	else if(val >= 1)
	{ 
		res[0] = '#48C698';
		res[1] = 'Выполнено';
		res[2] = 'Выполнено';
	}
	return res;
}

var max_val = Convert_Tag_Value_To_Num($('.full_fact_val.top'));

$('.inp_box #top_inp_main').on('input', function(){
	var inp_val = Convert_Input_Value_To_Num($(this));
	var res = inp_val/max_val;
	var arr = Calibrate(res);
	$('.statuss.top').css('background', arr[0]);
	$('.statuss.top .for_desctop').html(arr[1]);
	$('.statuss.top .for_mobile').html(arr[2]);
});

$('.full.top').on('click', function(){
	var arr = Calibrate(1);
	$('.statuss.top').css('background', arr[0]);
	$('.statuss.top .for_desctop').html(arr[1]);
	$('.statuss.top .for_mobile').html(arr[2]);
});
/***************Изменение цвета кнопки статус выполнения***********/

$(".pk_after").mask("9.99");

var sides = $('.detail .side_var')
sides.on('click', function(){
	sides.removeClass('active');
	$(this).addClass('active');
	Init_Save_Box();
});












