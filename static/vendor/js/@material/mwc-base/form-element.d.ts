/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { addHasRemoveClass, BaseElement, CustomEventListener, EventType, SpecificEventListener } from './base-element.js';
import { RippleInterface } from './utils.js';
export { addHasRemoveClass, BaseElement, CustomEventListener, EventType, RippleInterface, SpecificEventListener };
declare global {
    interface FormDataEvent extends Event {
        readonly formData: FormData;
    }
    interface HTMLElementEventMap {
        formdata: FormDataEvent;
    }
}
/** @soyCompatible */
export declare abstract class FormElement extends BaseElement {
    static shadowRootOptions: ShadowRootInit;
    /**
     * Form-capable element in the component ShadowRoot.
     *
     * Define in your component with the `@query` decorator
     */
    protected abstract formElement: HTMLElement;
    /**
     * Disabled state for the component. When `disabled` is set to `true`, the
     * component will not be added to form submission.
     */
    disabled: boolean;
    /**
     * Implement ripple getter for Ripple integration with mwc-formfield
     */
    readonly ripple?: Promise<RippleInterface | null>;
    /**
     * Form element that contains this element
     */
    protected containingForm: HTMLFormElement | null;
    protected formDataListener: (ev: FormDataEvent) => void;
    protected findFormElement(): HTMLFormElement | null;
    /**
     * Implement this callback to submit form data
     */
    protected abstract setFormData(formData: FormData): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    click(): void;
    protected firstUpdated(): void;
}
