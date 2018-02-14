import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { GithubService } from '../github.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

	@ViewChild('id') id: ElementRef;
	users: any[] = [];
	title = 'app';

	subscribe: Subscription;

	constructor(
		private githubService: GithubService
	) { }

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		if (this.subscribe) this.subscribe.unsubscribe();
	}

	addUser(id: string): void {
		if (!id)
			return;

		this.subscribe = this.githubService.getUser(id).subscribe((res) => {
			console.log(res);
			this.users.push({ id: res.id, name: res.nickname, description: res.permalink, address: res.address.city });
			this.id.nativeElement.value = '';
		});
		console.log('fim do metodo');
	}
}
