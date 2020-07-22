<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    /**
     * @Route("/app", name="redir")
     */
    public function redir() {
        //return $this->redirectToRoute('app_home', ['reactRouting' => "home"], 301);
        return $this->redirect('/app/home');
    }

    /**
     * @Route("/app/{reactRouting}", name="app_home", defaults={"reactRouting": null})
     */
    public function index() {
        return $this->render('app/index.html.twig');
    }

    /**
     * @Route("/installapp", name="app_install")
     */
    public function installapp() {
        return $this->render('app/install.html.twig');
    }
}
