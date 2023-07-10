import React from 'react'

export default function Aboutus() {
  return (
    <div>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Organization
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime blanditiis non consectetur amet ea iste repellendus numquam, officia a nam itaque magnam voluptatem est eius. Eaque reiciendis impedit sunt minima blanditiis suscipit modi facilis, maxime harum ipsum, quia vel incidunt repellat pariatur illum quos sequi fuga! Dignissimos consectetur nam ut.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Reviews
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum optio officia vero consequatur consectetur aliquam eveniet ad omnis eos nobis unde illo incidunt soluta fugiat voluptas dicta nihil, alias beatae sunt aliquid ut provident exercitationem nostrum nesciunt! Perferendis, nulla necessitatibus. Voluptate necessitatibus non aliquid sunt et quia. Repellat non odio facilis quasi eum quae quia veniam quidem praesentium ullam ipsa, pariatur dolorum consequuntur, adipisci cupiditate iusto. Illo quasi ut facere alias provident labore quaerat ab architecto eligendi perspiciatis quo nisi similique, aliquam esse doloremque maxime nihil a modi possimus. Neque deleniti esse, magnam aliquid a ratione quod asperiores hic? Eaque.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
