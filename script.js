let balance = 0;

function completeOffer(offerType) {
    if(offerType === 'youtube') {
        balance += 5;
        alert('YouTube ऑफर पूर्ण! ₹5 जोडले गेले.');
    } else if(offerType === 'survey') {
        balance += 10;
        alert('सर्व्हे ऑफर पूर्ण! ₹10 जोडले गेले.');
    }
    
    document.getElementById('balance').textContent = balance;
    
    // तुमच्या डेटाबेसमध्ये सेव करण्यासाठी (पुढच्या स्टेपमध्ये)
    localStorage.setItem('userBalance', balance);
}

// पेज लोड झाल्यावर बॅलन्स लोड करा
document.addEventListener('DOMContentLoaded', function() {
    let savedBalance = localStorage.getItem('userBalance');
    if (savedBalance) {
        balance = parseInt(savedBalance);
        document.getElementById('balance').textContent = balance;
    }
});
