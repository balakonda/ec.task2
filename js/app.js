(function () {

	const colNames = ['productItemName', 'optionItemName', 'attributes', 'revenueType', 'displayQty', 'displayUnitPrice', 'startMonth', 'months', 'revenueRecognitionName', 'committed']
	const productIds = [];
	const shortMonthName = new Intl.DateTimeFormat('en-US', {
		month: 'short'
	}).format;
	let yearData = {};
	const yrs = [];
	let view = 'year';

	// JSON Data Start
	var summaryYears = {
		status: "success",
		responseData: {
			yearsData: [{
					year: "2019",
					summaryAmount: "$2,190.80",
					lineData: [{
							recordId: "a2m2G000000AJKQQA4",
							amount: "$1,045.00"
						},
						{
							recordId: "a2m2G000009H0fIQAS",
							amount: "$1,100.00"
						},
						{
							recordId: "a2m2G000009H0fHQAS",
							amount: "$45.80"
						}
					]
				},
				{
					year: "2020",
					summaryAmount: "$1,874.20",
					lineData: [{
							recordId: "a2m2G000000AJKQQA4",
							amount: "$665.00"
						},
						{
							recordId: "a2m2G000009H0fIQAS",
							amount: "$1,200.00"
						},
						{
							recordId: "a2m2G000009H0fHQAS",
							amount: "$9.20"
						}
					]
				},
				{
					year: "2021",
					summaryAmount: "$100.00",
					lineData: [{
						recordId: "a2m2G000009H0fIQAS",
						amount: "$100.00"
					}]
				}
			]
		},
		message: null
	};
	var summaryMonths = {
		status: "success",
		responseData: {
			summaryAmount: [
				"$195.00",
				"$199.58",
				"$199.58",
				"$199.58",
				"$199.58",
				"$199.58",
				"$199.58",
				"$199.58",
				"$199.58",
				"$199.58",
				"$199.58",
				"$199.58",
				"$199.62",
				"$195.00",
				"$195.00",
				"$195.00",
				"$195.00",
				"$195.00",
				"$100.00",
				"$100.00",
				"$100.00",
				"$100.00",
				"$100.00",
				"$100.00"
			],
			startYear: 2019,
			startMonth: 2,
			linesData: [{
					startYear: 2019,
					startMonth: 2,
					recordId: "a2m2G000000AJKQQA4",
					data: [
						"$95.00",
						"$95.00",
						"$95.00",
						"$95.00",
						"$95.00",
						"$95.00",
						"$95.00",
						"$95.00",
						"$95.00",
						"$95.00",
						"$95.00",
						"$95.00",
						"$95.00",
						"$95.00",
						"$95.00",
						"$95.00",
						"$95.00",
						"$95.00"
					]
				},
				{
					startYear: 2019,
					startMonth: 2,
					recordId: "a2m2G000009H0fIQAS",
					data: [
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00",
						"$100.00"
					]
				},
				{
					startYear: 2019,
					startMonth: 3,
					recordId: "a2m2G000009H0fHQAS",
					data: [
						"$4.58",
						"$4.58",
						"$4.58",
						"$4.58",
						"$4.58",
						"$4.58",
						"$4.58",
						"$4.58",
						"$4.58",
						"$4.58",
						"$4.58",
						"$4.62"
					]
				}
			]
		},
		message: null
	};
	var lineItemData = [{
			unitPrice: 95,
			startMonth: "2/1/2019",
			revenueType: "MRC",
			revenueRecognitionName: null,
			revenueRecognitionId: null,
			qty: 1,
			productItemName: "Captio User Delegation",
			productItemId: "a01A000001gmFXZIA2",
			productFLIId: "a2m2G000000AJKQQA4",
			priorMRR: null,
			optionItemName: null,
			optionItemId: null,
			optionFLIId: null,
			monthsVR: null,
			monthsNRC: null,
			monthsMRC: null,
			months: 18,
			displayUnitPrice: "$95.00",
			displayQty: "1",
			displayPriorMRR: null,
			committed: "No",
			attributesWithValues: null,
			attributes: null
		},
		{
			unitPrice: 55,
			startMonth: "3/1/2019",
			revenueType: "NRC",
			revenueRecognitionName: null,
			revenueRecognitionId: null,
			qty: 1,
			productItemName: "TNS Link",
			productItemId: "a01A000001utm3RIAQ",
			productFLIId: "a2m2G000009H0fHQAS",
			priorMRR: null,
			optionItemName: null,
			optionItemId: null,
			optionFLIId: null,
			monthsVR: null,
			monthsNRC: null,
			monthsMRC: null,
			months: 12,
			displayUnitPrice: "$55.00",
			displayQty: "1",
			displayPriorMRR: null,
			committed: "No",
			attributesWithValues: null,
			attributes: null
		},
		{
			unitPrice: 100,
			startMonth: "2/1/2019",
			revenueType: "MRC",
			revenueRecognitionName: null,
			revenueRecognitionId: null,
			qty: 1,
			productItemName: "TNS Link",
			productItemId: "a01A000001utm3RIAQ",
			productFLIId: "a2m2G000009H0fIQAS",
			priorMRR: null,
			optionItemName: null,
			optionItemId: null,
			optionFLIId: null,
			monthsVR: null,
			monthsNRC: null,
			monthsMRC: null,
			months: 24,
			displayUnitPrice: "$100.00",
			displayQty: "1",
			displayPriorMRR: null,
			committed: "No",
			attributesWithValues: null,
			attributes: null
		}
	];
	// JSON Data End

	// Helper methods Start
	const getStartMonthAndYearFromDate = (dt) => {
		return `${shortMonthName(dt)} ${dt.getFullYear()}`;
	};

	const getStartMonthAndYear = (str) => {
		const dt = new Date(str);
		return getStartMonthAndYearFromDate(dt);
	};

	const getCellData = (item, key) => {
		switch (key) {
			case 'startMonth':
				return getStartMonthAndYear(item[key]);
			case 'displayUnitPrice':
				return item[key].substring(1);
			default:
				return item[key] || 'N/A';
		}
	};

	const getEmptyCells = (len) => {
		let cells = '';
		for (let i = 0; i < len; i++) {
			cells += '<td>-</td>';
		}
		return cells;
	};

	const getMonthDiff = (from, to) => {
		return (to.startMonth - from.startMonth) + ((to.startYear - from.startYear) * 12);
	};
	// Helper methods End

	// Expanded/Months View Start
	const getMonthHeaderAndSummaryCells = () => {
		let footerCells = '';
		let headerCells = '';
		let dt = new Date(summaryMonths.responseData.startYear, summaryMonths.responseData.startMonth - 2, 1);
		summaryMonths.responseData.summaryAmount.forEach((val) => {
			footerCells += `<td>${val}</td>`;
			dt = new Date(dt.setMonth(dt.getMonth() + 1));
			headerCells += `<th>${getStartMonthAndYearFromDate(dt)}</th>`;
		});
		return {
			footerCells,
			headerCells
		};
	};

	const getMonthProductCells = (id) => {
		const productData = summaryMonths.responseData.linesData.find((item) => item.recordId === id);
		const length = summaryMonths.responseData.summaryAmount.length;
		let monthDiff = getMonthDiff(summaryMonths.responseData, productData);
		const diff = length - productData.data.length - monthDiff;
		let cells = '';

		cells += getEmptyCells(monthDiff);
		productData.data.forEach((val) => {
			cells += `<td>${val}</td>`;
		});
		cells += getEmptyCells(diff);
		return cells;
	};
	// Expanded/Months View End

	// Collapsed/Years View Start
	const modifySummaryYears = () => {
		summaryYears.responseData.yearsData.forEach((ySmry) => {
			yrs.push(ySmry.year);
			yearData[ySmry.year] = ySmry.summaryAmount;
			ySmry.lineData.forEach((line) => {
				if (yearData[line.recordId]) {
					yearData[line.recordId][ySmry.year] = line.amount;
				} else {
					yearData[line.recordId] = {
						[ySmry.year]: line.amount
					};
				}
			});
		});
		yrs.sort((a, b) => a - b);
	};
	modifySummaryYears();

	const getYearHeaderCells = () => {
		let cells = '';
		yrs.forEach((key) => cells += `<th>${key}</th>`);
		return cells;
	};

	const getYearCellsForProduct = (pid) => {
		let cells = '';
		yrs.forEach((key) => cells += `<td>${yearData[pid][key] || ''}</td>`);
		return cells;
	};

	const getYearSummaryCells = () => {
		let cells = '';
		yrs.forEach((key) => cells += `<td>${yearData[key]}</td>`);
		return cells;
	};
	// Collapsed/Years View End

	// Manage View Cells for Grid Start
	const appendNewCellsToRow = (row, cells) => {
		$(row).find('td').slice(colNames.length).remove();
		$(row).append($(cells));
	};
	const appendNewCellsToHeader = (cells) => {
		$('#forecast-table thead tr th:gt(9)').remove();
		$('#forecast-table thead tr').append($(cells));
	};
	const appendNewCellsToFooter = (cells) => {
		$('#forecast-table tfoot tr td:gt(0)').remove();
		$('#forecast-table tfoot tr').append($(cells));
	};
	// Manage View Cells for Grid End

	const cloneAndPositionFirstColumn = () => {
		const oldrows = $('#forecast-table tbody tr');
		const position = $('#forecast-table tbody').offset();
		let newRows = $('<tbody></tbody>');
		$.each(oldrows, (i, row) => {
			const newRow = $('<tr></tr>');
			$(row).find('td:eq(0)').clone().appendTo(newRow);
			newRows.append(newRow);
		});
		$('#overlay-table').append(newRows);
		$('#overlay-table').css({
			top: `${Math.ceil(position.top + 1)}px`,
			left: `${position.left}px`
		});
	};

	const createInitialRows = () => {
		let rows = '';
		lineItemData.forEach((item) => {
			let cells = '';
			colNames.forEach(key => cells += `<td>${getCellData(item, key)}</td>`);
			rows += `<tr id="${item.productFLIId}">${cells}${getYearCellsForProduct(item.productFLIId)}</tr>`;
			productIds.push(item.productFLIId);
		});
		appendNewCellsToHeader(getYearHeaderCells());
		appendNewCellsToFooter(getYearSummaryCells());
		$('#forecast-table tbody').append(rows);
		cloneAndPositionFirstColumn();
	};
	createInitialRows();

	const modifyGridByView = () => {
		const grows = $('#forecast-table tbody tr');
		if (view === 'year') {
			$.each(grows, (i, row) => {
				const cells = getYearCellsForProduct(row.id);
				appendNewCellsToRow(row, cells);
			});
			appendNewCellsToHeader(getYearHeaderCells());
			appendNewCellsToFooter(getYearSummaryCells());
		} else if (view === 'month') {
			$.each(grows, (i, row) => {
				const cells = getMonthProductCells(row.id);
				appendNewCellsToRow(row, cells);
			});
			const headerAndFooterCells = getMonthHeaderAndSummaryCells();
			appendNewCellsToHeader(headerAndFooterCells.headerCells);
			appendNewCellsToFooter(headerAndFooterCells.footerCells);
		}
	};
	// Click Event handler
	const changeView = (e) => {
		if (view !== e.target.dataset.view) {
			$('.dropdown-item').toggleClass('mactive');
			view = e.target.dataset.view;
			modifyGridByView();
		}
	}
	$('.grid-controls .dropdown-item').on('click', changeView);
})();