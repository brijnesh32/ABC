var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".growing-number");

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-num");
      const count = +counter.innerText;

      const increment = target / 50; // Change speed of counting

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20); // Adjust speed of counting
      } else {
        counter.innerText = target; // Ensure final value is set
      }
    };

    updateCount();
  });
});
// this customer success
const contentData = {
  transavia: `
      <div class="row align-items-center">
        <div class="col-lg-5">
          <div class="stat-box d-flex justify-content-between">
            <div><p class="fs-3 fw-bold m-0">0</p><p class="text-muted">flaky tests</p></div>
            <div><p class="fs-3 fw-bold m-0">70%</p><p class="text-muted">faster test execution</p></div>
          </div>
          <div class="quote"><img src="https://www.lambdatest.com/resources/images/home/comma.svg" alt="Comma">
            <p class="fs-5 fw-bold mt-3">Transavia achieved remarkable efficiency with LambdaTest.</p>
          </div>
          <p class="fw-semibold mb-1">Jane Doe</p>
          <p class="text-muted">QA Engineer</p>
        </div>
        <div class="col-lg-7">
          <div class="image-placeholder">
            <img src="https://www.lambdatest.com/resources/images/home/transavia_banner.png" alt="Transavia Story" class="img-fluid">
            <span>Transavia Story</span>
          </div>
        </div>
      </div>
    `,
  lereta: `
      <div class="row align-items-center">
        <div class="col-lg-5">
          <div class="stat-box d-flex justify-content-between">
            <div><p class="fs-3 fw-bold m-0">0</p><p class="text-muted">flaky tests</p></div>
            <div><p class="fs-3 fw-bold m-0">70%</p><p class="text-muted">faster test execution</p></div>
          </div>
          <div class="quote"><img src="https://www.lambdatest.com/resources/images/home/comma.svg" alt="Comma">
            <p class="fs-5 fw-bold mt-3">Transavia achieved remarkable efficiency with LambdaTest.</p>
          </div>
          <p class="fw-semibold mb-1">Jane Doe</p>
          <p class="text-muted">QA Engineer</p>
        </div>
        <div class="col-lg-7">
          <div class="image-placeholder">
            <img src="https://www.lambdatest.com/resources/images/home/transavia_banner.png" alt="Transavia Story" class="img-fluid">
            <span>Transavia Story</span>
          </div>
        </div>
      </div>
    `,
  // Add other entries like Lereta, Dunelm here...
};

function showContent(key, element) {
  document.getElementById("tab-content").innerHTML =
    contentData[key] || "<p>No content available.</p>";
  const allImages = document.querySelectorAll(".tab-images img");
  allImages.forEach((img) => img.classList.remove("active"));
  element.classList.add("active");
}
