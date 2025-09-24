<?php include 'config.php'; ?>

<section class="py-5 bg-light">
  <div class="container">
    <h2 class="mb-5 text-center" data-aos="fade-up">Historique de l’événement</h2>
    <div class="timeline">
      <?php
        $stmt = $pdo->query("SELECT * FROM editions ORDER BY annee ASC");
        $delay = 100;
        while ($row = $stmt->fetch()) {
          echo '<div class="row mb-4" data-aos="fade-up" data-aos-delay="' . $delay . '">';
          echo '<div class="col-md-2 fw-bold text-primary">' . $row['annee'] . '</div>';
          echo '<div class="col-md-10">';
          echo '<p><strong>' . htmlspecialchars($row['titre']) . '</strong> – ' . htmlspecialchars($row['description']) . '</p>';
          echo '</div></div>';
          $delay += 100;
        }
      ?>
    </div>
  </div>
</section>
