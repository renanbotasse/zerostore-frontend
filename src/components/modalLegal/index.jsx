import { useId, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { SfModal, SfButton, SfIconClose } from '@storefront-ui/react';

export default function ModalLegal({ isOpen, onClose, content }) {
    const headingId = useId();
    const descriptionId = useId();
    const modalRef = useRef(null);
    const backdropRef = useRef(null);

    return (
        <div className="z-10">
            <CSSTransition
                in={isOpen}
                nodeRef={backdropRef}
                timeout={200}
                unmountOnExit
                classNames={{
                    enter: 'opacity-0',
                    enterDone: 'opacity-100 transition duration-200 ease-out',
                    exitActive: 'opacity-0 transition duration-200 ease-out',
                }}
            >
                <div ref={backdropRef} className="fixed inset-0 bg-neutral-700 bg-opacity-50" />
            </CSSTransition>
            <CSSTransition
                in={isOpen}
                nodeRef={modalRef}
                timeout={200}
                unmountOnExit
                classNames={{
                    enter: 'translate-y-10 opacity-0',
                    enterDone: 'translate-y-0 opacity-100 transition duration-200 ease-out',
                    exitActive: 'translate-y-10 opacity-0 transition duration-200 ease-out',
                }}
            >
                <SfModal
                    open
                    onClose={onClose}
                    ref={modalRef}
                    as="section"
                    role="alertdialog"
                    aria-labelledby={headingId}
                    aria-describedby={descriptionId}
                    className="max-w-[90%] md:max-w-lg"
                >
                    <header>
                        <SfButton square variant="tertiary" className="absolute right-2 top-2 z-[5]" onClick={onClose}>
                            <SfIconClose />
                        </SfButton>
                        <h3 id={headingId} className="font-bold typography-headline-4 md:typography-headline-3 z-[5]">
                            {content.description}
                        </h3>
                    </header>
                    <p id={descriptionId} className="mt-2 z-[5]">
                        {content.text}
                    </p>
                    <footer className="flex justify-end gap-4 mt-4 z-[5] ">
                        <SfButton className=" bg-slate-950 hover:bg-red-950 " onClick={onClose}>
                            Close
                        </SfButton>
                    </footer>
                </SfModal>
            </CSSTransition>
        </div>
    );
}
