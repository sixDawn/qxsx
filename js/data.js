// JavaScript Document
$(document).ready(function () {
            $('#bar-7').jqbar({ label: 'to1UI/UE', value: 20, barColor: '#fc6b6b', orientation: 'v' });

            $('#bar-8').jqbar({ label: 'to2开发', barColor: '#55c6fb', value: 20, orientation: 'v' });

            $('#bar-9').jqbar({ label: 'to3测试', barColor: '#83fc6b', value: 10, orientation: 'v' });

            $('#bar-10').jqbar({ label: 'to4支付', barColor: '#6b6bfc', value: 2, orientation: 'v' });

            $('#bar-11').jqbar({ label: 'to1UI/UE', barColor: '#fc6b6b', value: 28, orientation: 'v' });

            $('#bar-12').jqbar({ label: 'to2开发', barColor: '#55c6fb', value: 28, orientation: 'v' });
			$('#bar-13').jqbar({ label: 'to3测试', barColor: '#83fc6b', value: 14, orientation: 'v' });
			$('#bar-14').jqbar({ label: 'to4支付', barColor: '#6b6bfc', value: 2, orientation: 'v' });

});
$(document).ready(function(e) {
        $("table td:even").css("background","#f8f8f8");
		$("table td:odd").css("background","#e5e5e5");
});