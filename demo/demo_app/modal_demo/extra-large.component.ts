import { Component } from "@angular/core";
import { Modal } from "../../..";

@Modal()
@Component({
	selector: "xxl-modal",
	template: `
	<cdl-modal size="xxl" (overlaySelected)="closeModal()">
		<cdl-modal-header (closeSelect)="closeModal()">XXL</cdl-modal-header>
		<section class="content">
			<p>This is an XXL Modal</p>
		</section>
		<cdl-modal-footer><button class="cancel-button" (click)="closeModal()">Cancel</button></cdl-modal-footer>
	</cdl-modal>
	`,
	styleUrls: ["./error-modal.component.scss"]
})
export class XLModalComponent {

	constructor() { }

}
