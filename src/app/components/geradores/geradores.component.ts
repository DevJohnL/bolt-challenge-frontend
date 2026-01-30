import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeradorService } from '../../services/gerador.service';
import { Gerador } from '../../models/gerador';

/**
 * Component que espelha a camada de Dados do Backend.
 * Responsável por exibir os dados na tela.
 */
@Component({
  selector: 'app-geradores-top5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './geradores.component.html',
  styleUrl: './geradores.component.css',
})
export class GeradoresTop5Component implements OnInit {
  geradores: Gerador[] = [];
  loading = true;
  error: string | null = null;

  constructor(private geradorService: GeradorService) {}

  ngOnInit(): void {
    this.geradorService.getTop5().subscribe({
      next: (data) => {
        this.geradores = data;
        this.loading = false;
        this.error = null;
      },
      error: (err) => {
        this.error = err?.message ?? 'Erro ao carregar os geradores. Verifique se a API está rodando em http://localhost:8080';
        this.loading = false;
      },
    });
  }
}
