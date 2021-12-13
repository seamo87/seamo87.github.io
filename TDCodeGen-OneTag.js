$(document).ready(function(){
	$('#tags').hide();
	$('#divc1').show();
	$('#checkpu').attr('disabled',true);
	$('#checkeu').click(function(){
		
        if($('#checkeu').prop('checked') == true && $('#checkpu').prop('checked') == false)
		{			
            $('#divc1').show();
			$('#divc2').hide();
			$('#checkpu').attr('disabled',true);
		}
        else 
		{	
			if($('#checkeu').prop('checked') == false && $('#checkpu').prop('checked') == true)
			{
				$('#divc1').hide();
				$('#divc2').show();
				$('#checkpu').attr('disabled',false);
			}
			else{
            $('#divc1').hide();
			$('#checkpu').attr('disabled',false);
		}}
	});
	$('#divc2').hide();
	$('#checkpu').click(function(){
        if($('#checkpu').prop('checked') == true && $('#checkeu').prop('checked') == false)
		{			
            $('#divc1').hide();
			$('#divc2').show();
			$('#checkeu').attr('disabled',true);
		}
        else
		{
			if($('#checkpu').prop('checked') == false && $('#checkeu').prop('checked') == true)
			{
				$('#divc1').show();
				$('#divc2').hide();
				$('#checkeu').attr('disabled',false);
			}
			else{
				$('#divc2').hide();
				$('#checkeu').attr('disabled',false);
			}
    }
	});
	$('#divc3').hide();
	$('#checkpg').click(function(){
        if ($('#checkpg').prop('checked')==true)
		{			
            $('#divc3').show();
		}
        else
		{	
            $('#divc3').hide();
    }
	});
	var txtname='';
	$('#tagGen').submit(function (e) {
		
	const orgID =$('#org').val();
	const eventID=$('#event').val();
	const cid=$('#cid').val();
	const exactU = $('#exact').val();
	const partialU=$('#partial').val();
	const pageT=$('#page').val();
	var trackPrefix = '//Tags to be placed into the container tag in Spaceport\r\n\r\n'; 
	if($('#checkeu').prop('checked') == true && $('#checkpg').prop('checked')==true)
		{trackPrefix=trackPrefix+'var tdu=\'\';\r\nvar tdp=\'\';\r\nvar tdm=\'\';\r\nvar tdpm=\'\';\r\ntdu=\''+exactU+'\';\r\ntdp=\''+pageT+'\';\r\ntdm=TDConf.Config.pageURL.match(new RegExp(\'^\'+tdu+\'$\', \'g\'));\r\ntdpm=TDConf.Config.pageType.match(new RegExp(tdp,\'g\'));\r\n\r\nif(tdm !==null && tdpm !==null) {\r\n\r\n';}
	else {
			if($('#checkpu').prop('checked') == true && $('#checkpg').prop('checked')==true)
				{trackPrefix=trackPrefix+'var tdu=\'\';\r\nvar tdp=\'\';\r\nvar tdpm=\'\';\r\nvar tdm=\'\';\r\ntdu=\''+partialU+'\';\r\ntdp=\''+pageT+'\';\r\ntdm=TDConf.Config.pageURL.match(new RegExp(tdu, \'g\'));\r\ntdpm=TDConf.Config.pageType.match(new RegExp(tdp,\'g\'));\r\n\r\nif(tdm !==null && tdpm !==null) {\r\n\r\n';}
			else{
					if($('#checkpg').prop('checked')==true)
					{trackPrefix=trackPrefix+'var tdp=\'\';\r\nvar tdpm=\'\';\r\ntdp=\''+pageT+'\';\r\ntdpm=TDConf.Config.pageType.match(new RegExp(tdp,\'g\'));\r\n\r\nif(tdpm !==null) {\r\n\r\n';}
					else{
						if($('#checkeu').prop('checked')==true)
						{trackPrefix=trackPrefix+'var tdu=\'\';\r\nvar tdm=\'\';\r\ntdu=\''+exactU+'\';\r\ntdm=TDConf.Config.pageURL.match(new RegExp(\'^\'+tdu+\'$\', \'g\'));\r\n\r\nif(tdm !==null) {\r\n\r\n';
						}
						else{
							if($('#checkpu').prop('checked')==true)
							{trackPrefix=trackPrefix+'var tdu=\'\';\r\nvar tdm=\'\';\r\ntdu=\''+partialU+'\';\r\ntdm=TDConf.Config.pageURL.match(new RegExp(tdu, \'g\'));\r\n\r\nif(tdm !==null) {\r\n\r\n'
							}
							else{
					};};};};};
	var contTags='Tags to be added on all pages of Advertiser domain\r\n=======================================================================\r\n\r\n<!-- Sales Script -->\r\n<!-- Start Tradedoubler Landing Page Tag Insert on all landing pages to handle first party cookie-->\r\n<script language=\"JavaScript\">\r\n        (function(i,s,o,g,r,a,m){i[\'TDConversionObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\', \'https://svht.tradedoubler.com/tr_sdk.js\', \'tdconv\');\r\n</script>\r\n<!-- End Tradedoubler tag--> <\/script>\r\n\r\n<script type=\"text\/javascript\">\r\nvar TDConf = TDConf || {};\r\nTDConf.Config = { \r\n  pageType: \"[PAGE_TYPE]\",\r\n  pageURL: window.location.href,\r\n  orderId: \"[ORDER_NUMBER]\", \r\n  orderValue: \"[ORDER_VALUE]\",\r\n  currency: \"[CURRENCY]\",\r\n  voucher: \"[VOUCHER]\"\r\n};\r\n<\/script>\r\n\r\n<script type=\"text\/javascript\" src=\"https:\/\/swrap.tradedoubler.com\/wrap?id='+cid+'\"><\/script>';
	var trackTags=trackPrefix+'(function(i,s,o,g,r,a,m){i[\'TDConversionObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\', \'https://svht.tradedoubler.com/tr_sdk.js\', \'tdconv\');\r\n        tdconv(\'init\', \''+orgID+'\', {\'element\': \'iframe\' });\r\n        tdconv(\'track\', \'sale\',\r\n{\'transactionId\':TDConf.Config.orderId,\'ordervalue\':TDConf.Config.orderValue,\'currency\':TDConf.Config.currency,\'event\':\''+eventID+'\',\'voucher\':TDConf.Config.voucher});\r\n	}\r\n	else{\r\n	};';
	var GTMtags='Tags to be inserted in GTM "TRADEDOUBLER COOKIE" Custom HTML tag\r\n=======================================================================\r\n\r\n<!-- Sales Script -->\r\n<!-- Start Tradedoubler Landing Page Tag Insert on all landing pages to handle first party cookie-->\r\n<script language=\"JavaScript\">\r\n(function(i,s,o,g,r,a,m){i[\'TDConversionObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\', \'https://svht.tradedoubler.com/tr_sdk.js\', \'tdconv\');\r\n</script>\r\n<!-- End Tradedoubler tag--> <\/script>\r\n\r\n\r\nTags to be inserted in GTM "TRADEDOUBLER CONVERSION TAG" Custom HTML tag\r\n=======================================================================\r\n\r\n<script language=\"JavaScript\">\r\n        (function(i,s,o,g,r,a,m){i[\'TDConversionObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\', \'https://svht.tradedoubler.com/tr_sdk.js\', \'tdconv\');\r\n        tdconv(\'init\', \''+orgID+'\', {\'element\': \'iframe\' });\r\n        tdconv(\'track\', \'sale\',\r\n{\'transactionId\':\'[ORDER_NUMBER]\',\'ordervalue\':\'[ORDER_VALUE]\',\'currency\':\'[CURRENCY]\',\'event\':\''+eventID+'\',\'voucher\':\'[VOUCHER_CODE]\'});\r\n<\/script>';
	var shopifyTags='Tags to be added in Shopify under Settings -> Checkout -> Order Processing -> Order Status text box\r\n=======================================================================\r\n\r\n<script language=\"JavaScript\">\r\n(function(i,s,o,g,r,a,m){i[\'TDConversionObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\', \'https://svht.tradedoubler.com/tr_sdk.js?\' + Math.random(), \'tdconv\');\r\ntdconv(\'init\', \''+orgID+'\', {\'program\':false});\r\n;\r\ntdconv(\"track\", \"sale\", {\"transactionId\":\"{{ order_number }}\",\"ordervalue\":\"{{ td_order_value }}\",\"currency\":\"{{ currency }}\",\"event\":\"'+eventID+'\", \"voucher\":\"{{ discounts.first.code }}\"});\r\n<\/script>';
	if($('#checkReport').is(':checked'))
	{contTags='Tags to be added on all pages of Advertiser domain\r\n=======================================================================\r\n\r\n<!-- Sales Script -->\r\n<!-- Start Tradedoubler Landing Page Tag Insert on all landing pages to handle first party cookie-->\r\n<script language=\"JavaScript\">\r\n        (function(i,s,o,g,r,a,m){i[\'TDConversionObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\', \'https://svht.tradedoubler.com/tr_sdk.js\', \'tdconv\');\r\n</script>\r\n<!-- End Tradedoubler tag--> <\/script>\r\n\r\n<script type=\"text\/javascript\">\r\nvar TDConf = TDConf || {};\r\nTDConf.Config = { \r\n  pageType: \"[PAGE_TYPE]\",\r\n  pageURL: window.location.href,\r\n  orderId: \"[ORDER_NUMBER]\", \r\n  orderValue: \"[ORDER_VALUE]\",\r\n  currency: \"[CURRENCY]\",\r\n  voucher: \"[VOUCHER]\"\r\n  reportInfo:[\r\n		f1:\'[PRODUCT IDs]\', f2:\'[PRODUCT NAMES]\',f3:\'[PRODUCT VALUES]\',f4:\'[QUANTITY]\'\r\n	];\r\n<\/script>\r\n\r\n<script type=\"text\/javascript\" src=\"https:\/\/swrap.tradedoubler.com\/wrap?id='+cid+'\"><\/script>';
	trackTags=trackPrefix+'(function(i,s,o,g,r,a,m){i[\'TDConversionObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\', \'https://svht.tradedoubler.com/tr_sdk.js\', \'tdconv\');\r\n        tdconv(\'init\', \''+orgID+'\', {\'element\': \'iframe\' });\r\n        tdconv(\'track\', \'sale\',\r\n{\'transactionId\':TDConf.Config.orderId,\'ordervalue\':TDConf.Config.orderValue,\'currency\':TDConf.Config.currency,\'event\':\''+eventID+'\',\'voucher\':TDConf.Config.voucher,\'reportInfo\':TDConf.Config.reportInfo});\r\n	}\r\n	else{\r\n	};';
	GTMtags='Tags to be inserted in GTM "TRADEDOUBLER COOKIE" Custom HTML tag\r\n=======================================================================\r\n\r\n<!-- Sales Script -->\r\n<!-- Start Tradedoubler Landing Page Tag Insert on all landing pages to handle first party cookie-->\r\n<script language=\"JavaScript\">\r\n(function(i,s,o,g,r,a,m){i[\'TDConversionObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\', \'https://svht.tradedoubler.com/tr_sdk.js\', \'tdconv\');\r\n</script>\r\n<!-- End Tradedoubler tag--> <\/script>\r\n\r\n\r\nTags to be inserted in GTM "TRADEDOUBLER CONVERSION TAG" Custom HTML tag\r\n=======================================================================\r\n\r\n<script language=\"JavaScript\">\r\n        (function(i,s,o,g,r,a,m){i[\'TDConversionObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\', \'https://svht.tradedoubler.com/tr_sdk.js\', \'tdconv\');\r\n        tdconv(\'init\', \''+orgID+'\', {\'element\': \'iframe\' });\r\n        tdconv(\'track\', \'sale\',\r\n{\'transactionId\':\'[ORDER_NUMBER]\',\'ordervalue\':\'[ORDER_VALUE]\',\'currency\':\'[CURRENCY]\',\'event\':\''+eventID+'\',\'voucher\':\'[VOUCHER_CODE]\',\'reportInfo\':\'[reportInfo]\'});\r\n<\/script>';
	shopifyTags='Tags to be added in Shopify under Settings -> Checkout -> Order Processing -> Order Status text box\r\n=======================================================================\r\n\r\n<script language=\"JavaScript\">\r\n(function(i,s,o,g,r,a,m){i[\'TDConversionObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\', \'https://svht.tradedoubler.com/tr_sdk.js?\' + Math.random(), \'tdconv\');\r\ntdconv(\'init\', \''+orgID+'\', {\'program\':false});\r\nvar reportInfo =\'\';\r\n{% assign td_order_value = subtotal_price | minus: tax_price | money_without_currency | remove: \'.\' | remove: \',\' | divided_by: 100.0 %}\r\n{% for basket in line_items %}\r\nreportInfo = reportInfo + \"f1={{ basket.sku }}&f2={{ basket.title }}&f3={{ basket.price | money_without_currency | remove: \'.\' | remove: \',\' | divided_by: 100.0 }}&f4={{ basket.quantity }}|\";\r\n{% endfor %}\r\nreportInfo = encodeURIComponent(reportInfo.slice(0,-1));\r\ntdconv(\"track\", \"sale\", {\"transactionId\":\"{{ order_number }}\",\"ordervalue\":\"{{ td_order_value }}\",\"currency\":\"{{ currency }}\",\"event\":\"'+eventID+'\", \"voucher\":\"{{ discounts.first.code }}\", \"reportInfo\":reportInfo});\r\n<\/script>';
	}
	
	else{}
	
	e.preventDefault();
	   if($('#container').is(':checked'))
	   {
			$('#tags').show();
			$('#tagCode').val('');
			$('#tagCode').val( $('#tagCode').val() + contTags);
			txtname = 'TD Client tags - '+orgID+'.txt';
			return;
		}
		else {
			if($('#tracking').is(':checked'))
			{
				$('#tags').show();
				$('#tagCode').val('');
				$('#tagCode').val( $('#tagCode').val() + trackTags);
				txtname = 'TD Spaceport tags - '+orgID+'.txt';
				return;
			}
			else{
				if($('#GTM').is(':checked'))
				{
					$('#tags').show();
					$('#tagCode').val('');
					$('#tagCode').val( $('#tagCode').val() + GTMtags);
					txtname = 'TD GTM tags - '+orgID+'.txt';
					return;
				}
				else{
					if($('#shopify').is(':checked'))
					{
					$('#tags').show();
					$('#tagCode').val('');
					$('#tagCode').val( $('#tagCode').val() + shopifyTags);
					txtname = 'TD Shopify tags - '+orgID+'.txt';
					return;
					}
					else{
					}
			};
		};
	};
	const downloadToFile = (content, filename, contentType) => {
	const a = document.createElement('a');
	const file = new Blob([content], {type: contentType});
		
		a.href= URL.createObjectURL(file);
		a.download = filename;
		a.click();

	URL.revokeObjectURL(a.href);
		};
		document.querySelector('#exporttxt').addEventListener('click', () => {
			const txt = document.querySelector('#tagCode');
		
	downloadToFile(txt.value, txtname, 'text/plain');
	});
	});
				});