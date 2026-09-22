import React, { useState, useRef } from 'react';
import '../SmallLetter.css';

const SmallLetter = () => {
    // 1. State to control the letter's open/close status
    const [isOpen, setIsOpen] = useState(false);

    // 2. Ref to hold the main letter container DOM element
    // This is needed to manually add/remove the '--close' class for the animation timing
    const letterRef = useRef(null);

    // --- Logic for Envelope Click (Toggle) ---

    const handleToggleLetter = () => {
        const letterElement = letterRef.current;
        if (!letterElement) return; // Safety check

        if (isOpen) {
            // CLOSE SEQUENCE:
            // 1. Set the class for the closing animation
            letterElement.classList.add('small-rajib-letter--close');
            setIsOpen(false);

            // 2. Remove the closing class after the animation duration (600ms)
            setTimeout(() => {
                letterElement.classList.remove('small-rajib-letter--close');
            }, 600);

        } else {
            // OPEN SEQUENCE:
            // 1. Ensure the close class is removed
            letterElement.classList.remove('small-rajib-letter--close');
            // 2. Set state to open (which adds 'small-rajib-letter--open')
            setIsOpen(true);
        }
    };

    // --- Logic for 'X' Click (Close Only) ---

    const handleCloseLetter = () => {
        const letterElement = letterRef.current;
        if (!letterElement) return; // Safety check

        // Start the close animation immediately
        letterElement.classList.remove('small-rajib-letter--open');
        letterElement.classList.add('small-rajib-letter--close');
        setIsOpen(false); // Update state to reflect closed status

        // Remove the closing class after the animation duration (600ms)
        setTimeout(() => {
            letterElement.classList.remove('small-rajib-letter--close');
        }, 600);
    };

    // Determine the dynamic class based on 'isOpen' state
    const letterStateClass = isOpen ? 'small-rajib-letter--open' : '';

    return (
        <>
            <div
                className={`small-rajib-letter ${letterStateClass}`}
                ref={letterRef} // Attach the ref here
            >
                <div
                    className="small-rajib-envelope"
                    onClick={handleToggleLetter} // Attach the toggle handler
                >
                    <div className="small-rajib-envelope-flap"></div>
                    <div className="small-rajib-envelope-paper"></div>
                    <div className="small-rajib-envelope-detail"></div>
                </div>

                <div className="small-rajib-paper">
    <div className="small-rajib-paper-content">
        <div
            className="small-rajib-paper-close"
            onClick={handleCloseLetter} // Attach the close handler
        >
            x
        </div>
        <p>Hey Birthday Girl! 💗<br /><br />Happy Birthday to one of the most beautiful souls in my life! 🥳✨<br /><br />I don't say this often enough, but I'm genuinely so grateful that you came into my life. Somewhere between all our random conversations, stupid jokes, endless teasing and those moments when we somehow understand each other without saying much, you became someone incredibly special to me.<br /><br />And then there are our meet-ups 😂 — probably the most spontaneous thing about our friendship. No proper planning, no fixed schedule, sometimes just a random "milte hain?" and somehow, a little while later, we're actually sitting together. 😂 Honestly, I think that's what makes them even better. Some of the best memories aren't planned at all; they just happen. And with you, somehow those random plans always turn into moments worth remembering. ❤️<br /><br />Thank you for being the person I can share completely random things with and still know you'll be there when life isn't going so well.<br /><br />I hope this year gives you everything your heart has been quietly wishing for — lots of happiness, unforgettable memories, success, peace, adventures, and countless reasons to smile. You deserve days that make you excited to wake up and people who remind you how special you are.<br /><br />And no matter how old you get, please don't become too mature. 😂 We already have enough serious people in this world.<br /><br />Stay exactly the wonderful, crazy, kind-hearted person you are. I'm really lucky to call you my favourite spontaneous plan. ❤️<br /><br />Happy Birthday once again! 🎂✨<br />May this be your happiest year yet.<br /><br />— Your forever unplanned plan 🤍</p>
    </div>

    {/* --- NEW SVG DIARY PAGE DECORATION --- */}
    <svg className="rajib-diary-deco" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Left 'binding' line */}
        <line x1="5" y1="0" x2="5" y2="100" stroke="#E0DDB7" strokeWidth="1" className="diary-line left-line" />
        {/* Right 'border' line */}
        <line x1="95" y1="0" x2="95" y2="100" stroke="#E0DDB7" strokeWidth="1" className="diary-line right-line" />
        
        {/* Optional: Top/bottom faint lines for page feel */}
        <line x1="0" y1="5" x2="100" y2="5" stroke="#E0DDB7" strokeWidth="0.5" className="diary-line top-line" />
        <line x1="0" y1="95" x2="100" y2="95" stroke="#E0DDB7" strokeWidth="0.5" className="diary-line bottom-line" />
        
        {/* Subtle, pulsing dots along the left (like stitching) */}
        <circle cx="5" cy="10" r="0.5" fill="#E0DDB7" className="diary-dot dot-1" />
        <circle cx="5" cy="20" r="0.5" fill="#E0DDB7" className="diary-dot dot-2" />
        <circle cx="5" cy="30" r="0.5" fill="#E0DDB7" className="diary-dot dot-3" />
        <circle cx="5" cy="40" r="0.5" fill="#E0DDB7" className="diary-dot dot-4" />
        <circle cx="5" cy="50" r="0.5" fill="#E0DDB7" className="diary-dot dot-5" />
        <circle cx="5" cy="60" r="0.5" fill="#E0DDB7" className="diary-dot dot-6" />
        <circle cx="5" cy="70" r="0.5" fill="#E0DDB7" className="diary-dot dot-7" />
        <circle cx="5" cy="80" r="0.5" fill="#E0DDB7" className="diary-dot dot-8" />
        <circle cx="5" cy="90" r="0.5" fill="#E0DDB7" className="diary-dot dot-9" />
    </svg>
    
</div>
            </div>
        </>
    )
}

export default SmallLetter;