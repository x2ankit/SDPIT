<footer>
    <div class="container">
        <div class="footer-grid">
            <div class="footer-col">
                <h4>About SDPIT</h4>
                <p>The Leader in Computer Education and Information Technology. Committed to providing quality education and skills for the future.</p>
                <div class="social-links" style="margin-top: 20px;">
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="index.php">Home</a></li>
                    <li><a href="about.php">About Us</a></li>
                    <li><a href="#">Academic</a></li>
                    <li><a href="#">Branch</a></li>
                    <li><a href="#">Franchise</a></li>
                    <li><a href="#">Career</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Contact Info</h4>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i> C/o Swarna Prava Sathua, At-Rajbati (Baharigarh), PO/PS-Bonaigarh, Dist-Sundargarh, Odisha, India (770038)</li>
                    <li><i class="fas fa-envelope"></i> support@sdpiteducation.com</li>
                    <li><i class="fas fa-phone"></i> +91 8917369271</li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Working Hours</h4>
                <p><i class="fas fa-clock"></i> Mon - Sat (07:00 AM - 06:00 PM)</p>
                <p><i class="fas fa-times-circle"></i> Sunday - Closed</p>
                
                <h4 style="margin-top: 20px;">Newsletter</h4>
                <form action="#" style="display: flex; margin-top: 10px;">
                    <input type="email" placeholder="Your Email" style="padding: 10px; width: 70%; border: none; border-radius: 5px 0 0 5px; background: rgba(255,255,255,0.9);">
                    <button type="submit" style="width: 30%; background: var(--gold); border: none; cursor: pointer; border-radius: 0 5px 5px 0; font-weight: 700; color: #b91c2c; transition: all 0.3s ease;">Go</button>
                </form>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; <?php echo date("Y"); ?> SDPIT EDUCATIONAL SYSTEMS (OPC) PVT. LTD. All Rights Reserved.</p>
        </div>
    </div>
</footer>

<!-- Floating WhatsApp Button -->
<a href="https://wa.me/918917369271" class="whatsapp-float" target="_blank" title="Chat with us on WhatsApp">
    <i class="fab fa-whatsapp"></i>
</a>

<!-- Scroll Progress Bar -->
<div class="progress-bar" id="progressBar"></div>

<script>
// Scroll progress bar
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
});
</script>

</body>
</html>
