export default {
	state() {
		return {
			items: [
				{
					label: "Dashboard",
					to: "/admin",
					children: [],
				},
				{
					label: "Configurações",
					to: "/admin/settings",
					children: [],
				},
																 
				{
					label: "Emails",
					to: "",
					children: [
						{
							label: "Buscar",
							to: "/admin/email",
							children: [],
						},
						{
							label: "Novo",
							to: "/admin/email/0",
							children: [],
						},
					],
				},
																																				 
				{
					label: "Negócios",
					to: "",
					children: [
						{
							label: "Buscar",
							to: "/admin/temtrem-business",
							children: [],
						},
						{
							label: "Novo",
							to: "/admin/temtrem-business/0",
							children: [],
						},
					],
				},
												 
				{
					label: "Temtrem_businesses_items",
					to: "",
					children: [
						{
							label: "Buscar",
							to: "/admin/temtrem-businesses-item",
							children: [],
						},
						{
							label: "Novo",
							to: "/admin/temtrem-businesses-item/0",
							children: [],
						},
					],
				},
												 
				{
					label: "Temtrem_businesses_posts",
					to: "",
					children: [
						{
							label: "Buscar",
							to: "/admin/temtrem-businesses-post",
							children: [],
						},
						{
							label: "Novo",
							to: "/admin/temtrem-businesses-post/0",
							children: [],
						},
					],
				},
												 
				{
					label: "Temtrem_categories",
					to: "",
					children: [
						{
							label: "Buscar",
							to: "/admin/temtrem-category",
							children: [],
						},
						{
							label: "Novo",
							to: "/admin/temtrem-category/0",
							children: [],
						},
					],
				},
												 
				{
					label: "User_notifications",
					to: "",
					children: [
						{
							label: "Buscar",
							to: "/admin/user-notification",
							children: [],
						},
						{
							label: "Novo",
							to: "/admin/user-notification/0",
							children: [],
						},
					],
				},
												 
				{
					label: "Usuários",
					to: "",
					children: [
						{
							label: "Buscar",
							to: "/admin/user",
							children: [],
						},
						{
							label: "Novo",
							to: "/admin/user/0",
							children: [],
						},
					],
				},
											
			],
		};
	},
};