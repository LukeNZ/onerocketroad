import {Component, Input, Output, EventEmitter} from "@angular/core";
import {ViewState} from "../Enums/ViewState.enum";

@Component({
    selector: 'orr-editor',
    templateUrl: '/angular/views/editor.template.html'
})
/**
 * Reusable editor component that allows tab switching between Edit and preview modes with
 * markdown.
 */
export class EditorComponent {
    @Input('model') public body : string;
    @Output('onModelChange') public bodyModelChange = new EventEmitter<string>();

    public viewState = ViewState;
    public currentViewState: ViewState = ViewState.Edit;

    /**
     * Sets the view state on the editable item. Is either one of ViewState.Edit or
     * ViewState.View.
     *
     * @param state The state to set.
     */
    public setViewState(state : ViewState) : void {
        this.currentViewState = state;
    }

    /**
     * Called when the model is changed in the editor, and subsequently emits and event
     * to the parent component.
     *
     * @param body The newly updated body.
     */
    public modelChange(body : string) {
        this.body = body;
        this.bodyModelChange.emit(body);
    }
}