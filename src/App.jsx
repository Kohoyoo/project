import React from 'react';
import Dropdown from './modules/Dropdown';
import BIGFRONTIMAGE from './modules/BIGFRONTIMAGE';

const HomePage = () => {
  return (
    <div className="homepage">
          <Dropdown></Dropdown>
      <div className="container">
          <BIGFRONTIMAGE/>
        <section className="mission">
          <h2>Our Mission</h2>
          <div className="content-row first-image">
            <p>
              At NjRescue, we’re focused on making pet adoption easier by partnering with local shelters across New Jersey. Our goal is to connect animals with loving families and help reduce the overcrowding in shelters. We believe every pet deserves a second chance, and we work hard to ensure that each adoption is successful. Through our system, we ensure that the right animal finds the right home. Not only do we facilitate adoptions, but we also provide ongoing support to help animals transition smoothly into their new homes. Our mission is to make the adoption process as simple and rewarding as possible for both pets and their new families.
            </p>
            <img src="dog1.jpg" alt="Rescue Mission" />
          </div>
        </section>

        <section className="donation">
          <h2>Not Ready to Adopt? Donate!</h2>
          <div className="content-row second-image reverse">
            <p>
              If adoption isn’t an option for you right now, consider donating to help our cause. Your donation directly supports the rescue and care of animals in need, providing them with medical care, shelter, and transportation to new homes. Donations allow us to continue saving lives and help us provide monthly updates to donors about the animals they’ve supported. You’ll see how your contribution has helped each animal’s journey, from rescue to adoption. Every dollar makes a big impact in ensuring these animals are cared for and prepared for a bright future.
            </p>
            <img src="kitten.jpg" alt="Donation Help" />
          </div>
        </section>

        <section className="adoption">
          <h2>Why Adopt? Why Donate?</h2>
          <div className="content-row first-image">
            <p>
              Adopting a pet saves lives. When you adopt, you’re not only giving a pet a loving home, but you’re also making room in shelters for other animals in need. Every adoption counts towards reducing overcrowded shelters and helping pets find their forever homes. Donations play a crucial role in ensuring we can keep rescuing and supporting animals, whether through medical treatment or transportation. Together, adoption and donations help improve the lives of countless animals, and every step we take brings us closer to a better future for them.
            </p>
            <img src="girl1.jpg" alt="Adopted Pet" />
          </div>
        </section>

        <section className="call-to-action">
          <h2>Join Us in Saving Lives</h2>
          <p>
            You can make a difference today! Whether you choose to adopt or donate, every action helps save lives. By adopting, you offer an animal a second chance at a happy life. By donating, you ensure that we can continue our mission to rescue and care for animals in need. Together, we can change the future for New Jersey’s rescue animals and create brighter, happier endings for them all.
          </p>
        </section>
      </div>

      <footer className="footer">
        <p>&copy; 2025 NjRescue. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
