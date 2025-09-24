<?php
include 'config.php';
?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Dashboard – Investiture</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container py-5">
    <h1 class="mb-4 text-center">🎛️ Dashboard – Gestion des éditions</h1>

    <div class="mb-3 text-end">
      <a href="ajouter.php" class="btn btn-success">➕ Ajouter une édition</a>
    </div>

    <table class="table table-bordered table-hover bg-white">
      <thead class="table-primary">
        <tr>
          <th>ID</th>
          <th>Année</th>
          <th>Titre</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <?php
        try {
          $stmt = $pdo->query("SELECT * FROM editions ORDER BY annee DESC");
          while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            echo '<tr>';
            echo '<td>' . $row['id'] . '</td>';
            echo '<td>' . htmlspecialchars($row['annee']) . '</td>';
            echo '<td>' . htmlspecialchars($row['titre']) . '</td>';
            echo '<td>' . htmlspecialchars($row['description']) . '</td>';
            echo '<td>
                    <a href="modifier.php?id=' . $row['id'] . '" class="btn btn-sm btn-warning">✏️ Modifier</a>
                    <a href="supprimer.php?id=' . $row['id'] . '" class="btn btn-sm btn-danger" onclick="return confirm(\'Confirmer la suppression ?\')">🗑️ Supprimer</a>
                  </td>';
            echo '</tr>';
          }
        } catch (PDOException $e) {
          echo '<tr><td colspan="5" class="text-danger">Erreur : ' . $e->getMessage() . '</td></tr>';
        }
        ?>
      </tbody>
    </table>
  </div>
</body>
</html>
