$(document).ready(function() {
	//SAVE INDICATOR FORMS FUNCTION - ALL FORMS

    $('.btn-nw').on("click", function(){
        var url = null;

        if( $(this).data('id') === 'form_btn_save_1' ) {
        // FORM 1 =====================================================
            url = 'form1.php';
            var datas = {
                text_lga: jQuery("#getstarted_text_f").val(),
                text_time: jQuery("#getstarted_time").val(),
                text_officials: jQuery("#getstarted_figures_officials").val(),
                text_officers: jQuery("#getstarted_figures_officers").val(),
                text_radio: jQuery( "input[type=radio][name=inlineRadioOptions]:checked" ).val(),
                text_comments: jQuery("#getstarted_area").val()
            }
        } else if( $(this).data('id') === 'form_btn_save_2' ) {
        // FORM 2 =====================================================
            url = 'form2.php';
            var datas = {
                text_lga: jQuery("#getstarted_text_f").val(),
                text_time: jQuery("#getstarted_time").val(),
                text_comments: jQuery("#getstarted_area").val()
            }
        } else if( $(this).data('id') === 'form_btn_save_3' ) {
        // FORM 3 =====================================================
            url = 'form3.php';
            var datas = {
                form_questionnaire_name: jQuery("#form_questionnaire_name").val(),
                form_questionnaire_gender: jQuery("#form_questionnaire_gender").val(),
                form_questionnaire_lga: jQuery("#form_questionnaire_lga").val(),
                form_questionnaire_community: jQuery("#form_questionnaire_community").val(),
                form_questionnaire_senatorial: jQuery("#form_questionnaire_senatorial").val(),
                form_questionnaire_1: jQuery("#form_questionnaire_1").val(),
                form_questionnaire_2: jQuery("#form_questionnaire_2").val(),
                form_questionnaire_3: jQuery("#form_questionnaire_3").val(),
                form_questionnaire_4: jQuery("#form_questionnaire_4").val(),
                form_questionnaire_5: jQuery("#form_questionnaire_5").val(),
                form_questionnaire_6: jQuery("#form_questionnaire_6").val(),
                form_questionnaire_7: jQuery("#form_questionnaire_7").val(),
                form_questionnaire_8: jQuery("#form_questionnaire_8").val(),
                form_questionnaire_9: "Undecided",
                form_questionnaire_10: jQuery("#form_questionnaire_10").val(),
                form_questionnaire_11: "Undecided",
                form_questionnaire_12: jQuery("#form_questionnaire_12").val(),
                form_questionnaire_13: jQuery("#form_questionnaire_13").val(),
                form_questionnaire_14: jQuery("#form_questionnaire_14").val(),
                form_questionnaire_15: jQuery("#form_questionnaire_15").val(),
                form_questionnaire_16: jQuery("#form_questionnaire_16").val(),
                form_questionnaire_17: jQuery("#form_questionnaire_17").val(),
                form_questionnaire_18: jQuery("#form_questionnaire_18").val(),
                form_questionnaire_19: jQuery("#form_questionnaire_19").val(),
                form_questionnaire_20: jQuery("#form_questionnaire_20").val(),
                form_questionnaire_21: jQuery("#form_questionnaire_21").val(),
                form_questionnaire_22: jQuery("#form_questionnaire_22").val(),
                form_questionnaire_23: jQuery("#form_questionnaire_23").val(),
                form_questionnaire_24: jQuery("#form_questionnaire_24").val(),
                form_questionnaire_25: jQuery("#form_questionnaire_25").val(),
                form_questionnaire_26: jQuery("#form_questionnaire_26").val(),
                form_questionnaire_27: jQuery("#form_questionnaire_27").val(),
                form_questionnaire_28: jQuery("#form_questionnaire_28").val(),
                form_questionnaire_29: jQuery("#form_questionnaire_29").val(),
                form_questionnaire_30: jQuery("#form_questionnaire_30").val(),
                form_questionnaire_31: jQuery("#form_questionnaire_31").val(),
                form_questionnaire_32: jQuery("#form_questionnaire_32").val(),
                form_questionnaire_33: jQuery("#form_questionnaire_33").val(),
                form_questionnaire_34: jQuery("#form_questionnaire_34").val(),
                form_questionnaire_35: jQuery("#form_questionnaire_35").val(),
                form_questionnaire_36: jQuery("#form_questionnaire_36").val(),
                form_questionnaire_37: jQuery("#form_questionnaire_37").val(),
                form_questionnaire_38: jQuery("#form_questionnaire_38").val(),
                form_questionnaire_39: jQuery("#form_questionnaire_39").val(),
                form_questionnaire_40: jQuery("#form_questionnaire_40").val(),
                form_questionnaire_41: jQuery("#form_questionnaire_41").val(),
                form_questionnaire_42: jQuery("#form_questionnaire_42").val(),
                form_questionnaire_43: jQuery("#form_questionnaire_43").val(),
                form_questionnaire_44: jQuery("#form_questionnaire_44").val(),
                form_questionnaire_45: jQuery("#form_questionnaire_45").val(),
                form_questionnaire_46: jQuery("#form_questionnaire_46").val(),
                form_questionnaire_47: jQuery("#form_questionnaire_47").val(),
                form_questionnaire_48: jQuery("#form_questionnaire_48").val(),
                form_questionnaire_49: jQuery("#form_questionnaire_49").val(),
                form_questionnaire_50: jQuery("#form_questionnaire_50").val(),
                form_questionnaire_51: jQuery("#form_questionnaire_51").val(),
                form_questionnaire_52: jQuery("#form_questionnaire_52").val(),
                form_questionnaire_53: jQuery("#form_questionnaire_53").val(),
                form_questionnaire_54: jQuery("#form_questionnaire_54").val(),
                form_questionnaire_55: jQuery("#form_questionnaire_55").val(),
                form_questionnaire_56: jQuery("#form_questionnaire_56").val(),
                form_questionnaire_57: jQuery("#form_questionnaire_57").val(),
                form_questionnaire_58: jQuery("#form_questionnaire_58").val(),
                form_questionnaire_59: jQuery("#form_questionnaire_59").val(),
                form_questionnaire_60: jQuery("#form_questionnaire_60").val(),
                form_questionnaire_61: jQuery("#form_questionnaire_61").val(),
                form_questionnaire_62: jQuery("#form_questionnaire_62").val(),
                form_questionnaire_63: jQuery("#form_questionnaire_63").val(),
                form_questionnaire_64: jQuery("#form_questionnaire_64").val(),
                form_questionnaire_65: jQuery("#form_questionnaire_65").val(),
                form_questionnaire_66: jQuery("#form_questionnaire_66").val(),
                form_questionnaire_67: jQuery("#form_questionnaire_67").val(),
                form_questionnaire_68: jQuery("#form_questionnaire_68").val(),
                form_questionnaire_69: jQuery("#form_questionnaire_69").val(),
                form_questionnaire_70: jQuery("#form_questionnaire_70").val()
            }
        } else if( $(this).data('id') === 'form_btn_save_4' ) {
        // FORM 4 =====================================================
            url = 'form4.php';
            var datas = {
                form_questionnaire_name: jQuery("#form_questionnaire_name").val(),
                form_questionnaire_gender: jQuery("#form_questionnaire_gender").val(),
                form_questionnaire_lga: jQuery("#form_questionnaire_lga").val(),
                form_questionnaire_community: jQuery("#form_questionnaire_community").val(),
                form_questionnaire_senatorial: jQuery("#form_questionnaire_senatorial").val(),
                form_questionnaire_1: jQuery("#form_questionnaire_1").val(),
                form_questionnaire_2: jQuery("#form_questionnaire_2").val(),
                form_questionnaire_3: jQuery("#form_questionnaire_3").val(),
                form_questionnaire_4: jQuery("#form_questionnaire_4").val(),
                form_questionnaire_5: jQuery("#form_questionnaire_5").val(),
                form_questionnaire_6: jQuery("#form_questionnaire_6").val(),
                form_questionnaire_7: jQuery("#form_questionnaire_7").val(),
                form_questionnaire_8: jQuery("#form_questionnaire_8").val(),
                form_questionnaire_9: "Undecided",
                form_questionnaire_10: jQuery("#form_questionnaire_10").val(),
                form_questionnaire_11: jQuery("#form_questionnaire_11").val(),
                form_questionnaire_12: jQuery("#form_questionnaire_12").val(),
                form_questionnaire_13: jQuery("#form_questionnaire_13").val(),
                form_questionnaire_14: jQuery("#form_questionnaire_14").val(),
                form_questionnaire_15: jQuery("#form_questionnaire_15").val(),
                form_questionnaire_16: jQuery("#form_questionnaire_16").val(),
                form_questionnaire_17: jQuery("#form_questionnaire_17").val(),
                form_questionnaire_18: jQuery("#form_questionnaire_18").val(),
                form_questionnaire_19: jQuery("#form_questionnaire_19").val(),
                form_questionnaire_20: jQuery("#form_questionnaire_20").val(),
                form_questionnaire_21: jQuery("#form_questionnaire_21").val(),
                form_questionnaire_22: jQuery("#form_questionnaire_22").val(),
                form_questionnaire_23: jQuery("#form_questionnaire_23").val(),
                form_questionnaire_24: jQuery("#form_questionnaire_24").val(),
                form_questionnaire_25: jQuery("#form_questionnaire_25").val(),
                form_questionnaire_26: jQuery("#form_questionnaire_26").val(),
                form_questionnaire_27: jQuery("#form_questionnaire_27").val(),
                form_questionnaire_28: jQuery("#form_questionnaire_28").val(),
                form_questionnaire_29: jQuery("#form_questionnaire_29").val(),
                form_questionnaire_30: jQuery("#form_questionnaire_30").val(),
                form_questionnaire_31: jQuery("#form_questionnaire_31").val(),
                form_questionnaire_32: jQuery("#form_questionnaire_32").val(),
                form_questionnaire_33: jQuery("#form_questionnaire_33").val(),
                form_questionnaire_34: jQuery("#form_questionnaire_34").val(),
                form_questionnaire_35: jQuery("#form_questionnaire_35").val(),
                form_questionnaire_36: jQuery("#form_questionnaire_36").val(),
                form_questionnaire_37: jQuery("#form_questionnaire_37").val(),
                form_questionnaire_38: jQuery("#form_questionnaire_38").val(),
                form_questionnaire_39: jQuery("#form_questionnaire_39").val(),
                form_questionnaire_40: jQuery("#form_questionnaire_40").val(),
                form_questionnaire_41: jQuery("#form_questionnaire_41").val(),
                form_questionnaire_42: jQuery("#form_questionnaire_42").val(),
                form_questionnaire_43: jQuery("#form_questionnaire_43").val(),
                form_questionnaire_44: jQuery("#form_questionnaire_44").val(),
                form_questionnaire_45: jQuery("#form_questionnaire_45").val(),
                form_questionnaire_46: jQuery("#form_questionnaire_46").val(),
                form_questionnaire_47: jQuery("#form_questionnaire_47").val(),
                form_questionnaire_48: jQuery("#form_questionnaire_48").val(),
                form_questionnaire_49: jQuery("#form_questionnaire_49").val(),
                form_questionnaire_50: jQuery("#form_questionnaire_50").val(),
                form_questionnaire_51: jQuery("#form_questionnaire_51").val(),
                form_questionnaire_52: jQuery("#form_questionnaire_52").val(),
                form_questionnaire_53: jQuery("#form_questionnaire_53").val(),
                form_questionnaire_54: jQuery("#form_questionnaire_54").val(),
                form_questionnaire_55: jQuery("#form_questionnaire_55").val(),
                form_questionnaire_56: jQuery("#form_questionnaire_56").val(),
                form_questionnaire_57: jQuery("#form_questionnaire_57").val(),
                form_questionnaire_58: jQuery("#form_questionnaire_58").val(),
                form_questionnaire_59: jQuery("#form_questionnaire_59").val(),
                form_questionnaire_60: jQuery("#form_questionnaire_60").val(),
                form_questionnaire_61: jQuery("#form_questionnaire_61").val(),
                form_questionnaire_62: jQuery("#form_questionnaire_62").val(),
                form_questionnaire_63: jQuery("#form_questionnaire_63").val(),
                form_questionnaire_64: jQuery("#form_questionnaire_64").val(),
                form_questionnaire_65: jQuery("#form_questionnaire_65").val(),
                form_questionnaire_66: jQuery("#form_questionnaire_66").val(),
                form_questionnaire_67: jQuery("#form_questionnaire_67").val(),
                form_questionnaire_68: jQuery("#form_questionnaire_68").val(),
                form_questionnaire_69: jQuery("#form_questionnaire_69").val(),
                form_questionnaire_70: jQuery("#form_questionnaire_70").val(),
            }
        } else if( $(this).data('id') === 'form_btn_save_5' ) {
        // FORM 5 =====================================================
            url = 'form5.php';
            var datas = {
    			form_questionnaire_name: jQuery("#form_questionnaire_name").val(),
                form_questionnaire_gender: jQuery("#form_questionnaire_gender").val(),
                form_questionnaire_lga: jQuery("#form_questionnaire_lga").val(),
                form_questionnaire_community: jQuery("#form_questionnaire_community").val(),
                form_questionnaire_senatorial: jQuery("#form_questionnaire_senatorial").val(),
                form_questionnaire_1: jQuery("#form_questionnaire_1").val(),
                form_questionnaire_1_b: jQuery("#form_questionnaire_1_b").val(),
                form_questionnaire_2: jQuery("#form_questionnaire_2").val(),
                form_questionnaire_2_b: jQuery("#form_questionnaire_2_b").val(),
                form_questionnaire_3: jQuery("#form_questionnaire_3").val(),
                form_questionnaire_3_b: jQuery("#form_questionnaire_3_b").val(),
                form_questionnaire_4: jQuery("#form_questionnaire_4").val(),
                form_questionnaire_4_b: jQuery("#form_questionnaire_4_b").val(),
                form_questionnaire_5: jQuery("#form_questionnaire_5").val(),
                form_questionnaire_5_b: jQuery("#form_questionnaire_5_b").val(),
                form_questionnaire_6: jQuery("#form_questionnaire_6").val(),
                form_questionnaire_6_b: jQuery("#form_questionnaire_6_b").val(),
                form_questionnaire_7: jQuery("#form_questionnaire_7").val(),
                form_questionnaire_7_b: jQuery("#form_questionnaire_7_b").val(),
                form_questionnaire_8: jQuery("#form_questionnaire_8").val(),
                form_questionnaire_8_b: jQuery("#form_questionnaire_8_b").val(),
                form_questionnaire_9: jQuery("#form_questionnaire_9").val(),
                form_questionnaire_9_b: jQuery("#form_questionnaire_9_b").val(),
                form_questionnaire_10: jQuery("#form_questionnaire_10").val(),
                form_questionnaire_10_b: jQuery("#form_questionnaire_10_b").val(),
                form_questionnaire_11: jQuery("#form_questionnaire_11").val(),
                form_questionnaire_11_b: jQuery("#form_questionnaire_11_b").val(),
                form_questionnaire_12: jQuery("#form_questionnaire_12").val(),
                form_questionnaire_12_b: jQuery("#form_questionnaire_12_b").val(),
                form_questionnaire_13: jQuery("#form_questionnaire_13").val(),
                form_questionnaire_13_b: jQuery("#form_questionnaire_13_b").val(),
                form_questionnaire_14: jQuery("#form_questionnaire_14").val(),
                form_questionnaire_14_b: jQuery("#form_questionnaire_14_b").val(),
                form_questionnaire_15: jQuery("#form_questionnaire_15").val(),
                form_questionnaire_15_b: jQuery("#form_questionnaire_15_b").val(),
                form_questionnaire_16: jQuery("#form_questionnaire_16").val(),
                form_questionnaire_16_b: jQuery("#form_questionnaire_16_b").val(),
                form_questionnaire_17: jQuery("#form_questionnaire_17").val(),
                form_questionnaire_17_b: jQuery("#form_questionnaire_17_b").val(),
                form_questionnaire_18: jQuery("#form_questionnaire_18").val(),
                form_questionnaire_18_b: jQeury("#form_questionnaire_18_b").val(),
                form_questionnaire_19: jQuery("#form_questionnaire_19").val(),
                form_questionnaire_19_b: jQuery("#form_questionnaire_19_b").val(),
            }
        } else if( $(this).data('id') === 'form_btn_save_6' ) {
        // FORM 6 =====================================================
            url = 'form6.php';
            var datas = {
                form_questionnaire_name: jQuery("#form_questionnaire_name").val(),
                form_questionnaire_gender: jQuery("#form_questionnaire_gender").val(),
                form_questionnaire_lga: jQuery("#form_questionnaire_lga").val(),
                form_questionnaire_community: jQuery("#form_questionnaire_community").val(),
                form_questionnaire_senatorial: jQuery("#form_questionnaire_senatorial").val(),
                form_questionnaire_1: jQuery("#form_questionnaire_1").val(),
                form_questionnaire_2: jQuery("#form_questionnaire_2").val(),
                form_questionnaire_3: jQuery("#form_questionnaire_3").val(),
                form_questionnaire_4: jQuery("#form_questionnaire_4").val(),
                form_questionnaire_4_b: jQuery("#form_questionnaire_4_b").val(),
                form_questionnaire_5: jQuery("#form_questionnaire_5").val(),
                form_questionnaire_6: jQuery("#form_questionnaire_6").val(),
            }
        } else {
            url = null;
        }

        $.ajax({
            url: 'backend/' + url,
            method: 'post',
            data: datas,
            dataType: 'json',
            cache: false,
            success: function(data) {
                if(data.Type == 'fill') {
                    swal('Invalid Answer', data.Reply, 'error');
                } else if(data.Type == 'success') {
                    swal('Success', data.Reply, 'success');
                } else if(data.Type == 'error') {
                    swal('Error', data.Reply, 'error');
                } else {
                    swal('Info', 'Server is under constructions ! Please try again later.', 'info');
                }
                return false;
            }
        });
    });
});