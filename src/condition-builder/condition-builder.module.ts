import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";

import { DropdownModule } from "./../dropdown/dropdown.module";
import { NFormsModule } from "./../forms/forms.module";
import { IconModule, StaticIconModule } from "./../icon/icon.module";
import { TreeViewModule } from "./../tree-view/tree-view.module";

import { ConditionBuilder } from "./condition-builder.component";
import { Condition } from "./condition.component";
import { ConditionWrapper } from "./condition-wrapper.component";
import { ConditionBuilderService } from "./condition-builder.service";
import { PillInputModule } from "./../pill-input/pill-input.module";
import { DialogModule } from "./../dialog/dialog.module";

export { ConditionBuilderService } from "./condition-builder.service";
export { ConditionBuilder } from "./condition-builder.component";
export { Condition } from "./condition.component";

@NgModule({
	declarations: [
		ConditionBuilder,
		ConditionWrapper,
		Condition
	],
	exports: [
		ConditionBuilder,
		ConditionWrapper,
		Condition
	],
	imports: [
		CommonModule,
		TranslateModule,
		NFormsModule,
		FormsModule,
		IconModule,
		DropdownModule,
		PillInputModule,
		TreeViewModule,
		DialogModule,
		StaticIconModule
	],
	providers: [
		ConditionBuilderService
	]
})
export class ConditionBuilderModule {}