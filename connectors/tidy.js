export default class TidySheetConnector {
	constructor(cloner) {
		this.cloner = cloner;
	}

	connect(event, $sheet, data) {
		this._connectClassicMode(event, $sheet, data);
	}

	_connectClassicMode(event, $sheet, data) {
		const actorId = data.actor._id;
		const $items = $sheet.find(".item-list .item:not(.favorites .item, .effects-list .item)");
		$items.each((i, el) => {
			const itemId = $(el).attr("data-item-id");
			const $controls = $(el).find(".item-controls");
			if ($(el).find(".item-clone").length === 0) {
				const $cloneButton = $(`
                    <a class="item-control item-clone" title="Clone"><i class="fa fa-clone"></i></a>
                `);
				$cloneButton.off("click").click((e) => {
					this.cloner.clone(actorId, itemId);
				});
				$controls.prepend($cloneButton);
			}
		});
	}

	_connectContextMenuMode() {
		
	}
}
